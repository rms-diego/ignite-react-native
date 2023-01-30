import { ButtonTypeStyleProps, Container, Title } from "./styles";

import { TouchableOpacityProps } from "react-native";

interface Props extends TouchableOpacityProps {
  color?: ButtonTypeStyleProps;
  title: String;
}

export function Button({ color = "primary", title, ...rest }: Props) {
  return (
    <Container color={"primary"} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
