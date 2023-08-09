import {
  FlatList,
  Image,
  Pressable,
  Text,
  View,
  ViewStyle,
} from "react-native";
import * as Styled from "./styles";

import { useState } from "react";
import { Button, Screen, Input } from "@components/index";

export type TurmaType = {
  id: string;
  name: string;
};
type ItemType = {
  data: TurmaType;
};

const turmas: TurmaType[] = [
  {
    id: "1",
    name: "Turma 1",
  },
  {
    id: "2",
    name: "Turma 2",
  },
];

export const GroupsScreen = () => {
  const [value, setValue] = useState<string>("");

  const Item = ({ data }: ItemType) => (
    <Styled.TurmaContainer>
      <Styled.TurmaTitle>{data.name}</Styled.TurmaTitle>
    </Styled.TurmaContainer>
  );

  return (
    <Screen safeAreas={["top", "bottom"]} type="fixed">
      <Styled.Header>
        <Image source={require("@assets/logo.png")} />

        <Styled.HeaderTitle>Turmas</Styled.HeaderTitle>
        <Styled.HeaderSubtitle>Jogue com a sua turma</Styled.HeaderSubtitle>
      </Styled.Header>

      <Styled.Content>
        <Styled.Turmas
          data={turmas}
          ItemSeparatorComponent={() => <Styled.Separator />}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Item data={item} />}
        />
      </Styled.Content>
      <Styled.ButtonWrapper>
        <Button title="Criar turma" />
      </Styled.ButtonWrapper>
    </Screen>
  );
};
