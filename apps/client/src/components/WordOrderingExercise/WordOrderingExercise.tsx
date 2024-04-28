import { useMemo, useState } from "react";
import {
  ExerciseStatement,
  HeaderText,
  SelectedWord,
  WordWrapper,
  WordsWrapper,
  Wrapper,
} from "./WordOrderingExercise.styles";
import { Text, TouchableHighlight, ActivityIndicator } from "react-native";
import { shuffleArray } from "../../utils";
import { theme } from "../../styles";
import { Divider } from "../Divider";
import { useMutateExercise } from "store";

type IWord = {
  word: string;
  id: number;
};

export const WordOrderingExercise = () => {
  const [selectedWords, setSelectedWords] = useState<IWord[]>([]);
  const { exercise, isPending } = useMutateExercise();

  const solutionWords = useMemo(
    () => exercise?.solution.split(" "),
    [exercise]
  );

  const allWords = useMemo(() => {
    if (!solutionWords || !exercise?.extraWords) return [];
    return [...solutionWords, ...exercise?.extraWords];
  }, [solutionWords]);

  const mappedWords = useMemo(
    () =>
      allWords.map((word, index) => ({
        word,
        id: index,
      })),
    [allWords]
  );

  const randomizedWords = useMemo(
    () => shuffleArray(mappedWords),
    [mappedWords]
  );

  const handleWordSelection = (word: IWord) => {
    setSelectedWords([...selectedWords, word]);
  };

  const handleWordDeletion = (word: IWord) => {
    setSelectedWords(selectedWords.filter((w) => w !== word));
  };

  if (isPending)
    return (
      <Wrapper>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </Wrapper>
    );

  return (
    <Wrapper>
      <HeaderText>Ordena las palabras:</HeaderText>
      <ExerciseStatement>
        <Text>{exercise?.statement}</Text>
      </ExerciseStatement>
      <WordsWrapper>
        {selectedWords.map((word) => (
          <TouchableHighlight
            underlayColor={theme.colors.error + "80"}
            onPress={() => handleWordDeletion(word)}
            key={word.id}
          >
            <SelectedWord>
              <Text>{word.word}</Text>
            </SelectedWord>
          </TouchableHighlight>
        ))}
      </WordsWrapper>
      <Divider />
      <WordsWrapper>
        {randomizedWords
          .filter((w) => !selectedWords.includes(w))
          .map((word) => (
            <TouchableHighlight
              underlayColor={theme.colors.primary + "80"}
              onPress={() => handleWordSelection(word)}
              key={word.id}
            >
              <WordWrapper>
                <Text>{word.word}</Text>
              </WordWrapper>
            </TouchableHighlight>
          ))}
      </WordsWrapper>
    </Wrapper>
  );
};
