import { TouchableOpacityProps } from "react-native";

import { ButtonIconTypeStyleProps, Container, Icon } from "./styles";

interface Props extends TouchableOpacityProps {
  type: ButtonIconTypeStyleProps;
}

export function ButtonIcon({ type }: Props) {
  return (
    <Container>
      <Icon name="home" type="primary" />
    </Container>
  );
}
