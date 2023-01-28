import { ButtonTypeStyleProps, Container, Title } from "./styles";

interface Props {
  color?: ButtonTypeStyleProps;
  title: string;
}

export function Button({ color = "primary", title, ...rest }: Props) {
  return (
    <Container color={"primary"} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
