import { Container } from "./styles";

import { Header } from "@components/Header";
import { Highlight } from "@components/highligth";
import { GroupsCard } from "@components/GroupCard";

export function Groups() {
  return (
    <Container>
      <Header />

      <Highlight title="Turmas" subtitle="Jogue com sua turma" />

      <GroupsCard title="Turma 1" />
    </Container>
  );
}
