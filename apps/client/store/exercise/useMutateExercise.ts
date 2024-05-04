import { ExerciseService } from "@/sdk";
import { IExercise } from "@/sdk/exercise/exercise.contract";
import { useMutation } from "@tanstack/react-query";
import { create } from "zustand";
import { redirect, useNavigate } from "react-router-native";

interface IStore {
  exercise?: IExercise;
  setExercise: (exercise?: IExercise) => void;
}

const store = create<IStore>((set) => ({
  setExercise: (exercise) => set({ exercise }),
}));

export const useMutateExercise = () => {
  const { exercise, setExercise } = store();
  const navigateTo = useNavigate();

  const { mutate: createExercise, isPending } = useMutation({
    mutationFn: () => ExerciseService.createExercise(),
    onSuccess: (data) => {
      setExercise(data);
      navigateTo("/learn");
    },
  });

  return { createExercise, isPending, exercise, setExercise };
};
