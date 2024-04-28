import { RequestService } from "../request";
import { IExercise } from "./exercise.contract";

class Service extends RequestService {
  constructor() {
    super("http://127.0.0.1:5000");
  }

  async createExercise() {
    return this.poster<IExercise, undefined>(`/exercise`);
  }
}

export const ExerciseService = new Service();
