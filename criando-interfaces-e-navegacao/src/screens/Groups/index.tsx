import { useState } from "react";
import { FlatList } from "react-native";

import { Container } from "./styles";

import { Header } from "@components/Header";
import { Highlight } from "@components/highligth";
import { GroupsCard } from "@components/GroupCard";

export function Groups() {
  const [groups, setGroups] = useState<string[]>([
    "Turma 1",
    "Turma 2",
    "Turma 3",
    "Turma 4",
    "Turma 5",
    "Turma 6",
    "Turma 7",
  ]);

  return (
    <Container>
      <Header />

      <Highlight title="Turmas" subtitle="Jogue com sua turma" />

      <FlatList
        data={groups}
        renderItem={({ item }) => <GroupsCard title={item} />}
      />
    </Container>
  );
}
