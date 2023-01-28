import { useState } from "react";
import { FlatList } from "react-native";

import { Container } from "./styles";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { GroupsCard } from "@components/GroupCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);

  const isEmptyGroups = !groups.length;

  return (
    <Container>
      <Header />

      <Highlight title="Turmas" subtitle="Jogue com sua turma" />

      <FlatList
        data={groups}
        renderItem={({ item }) => <GroupsCard title={item} />}
        ListEmptyComponent={<ListEmpty message="Sem turmas" />}
        contentContainerStyle={isEmptyGroups && { flex: 1 }}
      />

      <Button title="Criar turma" />
    </Container>
  );
}
