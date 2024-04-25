import { useMemo, useState } from "react";
import {
  ExerciseStatement,
  HeaderText,
  SelectedWord,
  WordWrapper,
  WordsWrapper,
  Wrapper,
} from "./WordOrderingExercise.styles";
import { Text, TouchableHighlight } from "react-native";
import { shuffleArray } from "../../utils";
import { theme } from "../../styles";
import { Divider } from "../Divider";

type IWord = {
  word: string;
  id: number;
};

export const WordOrderingExercise = () => {
  const [selectedWords, setSelectedWords] = useState<IWord[]>([]);

  const words: IWord[] = "Franco era un dictador español"
    .split(" ")
    .map((word, index) => ({ word, id: index }));
  words.push(
    ...[
      { word: "italiano", id: words.length },
      { word: "comunista", id: words.length + 1 },
    ]
  );

  const randomizedWords = useMemo(() => shuffleArray(words), []);

  const handleWordSelection = (word: IWord) => {
    setSelectedWords([...selectedWords, word]);
  };

  const handleWordDeletion = (word: IWord) => {
    setSelectedWords(selectedWords.filter((w) => w !== word));
  };

  return (
    <Wrapper>
      <HeaderText>Ordena las palabras:</HeaderText>
      <ExerciseStatement>
        <Text>¿Quién era Franco?</Text>
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
