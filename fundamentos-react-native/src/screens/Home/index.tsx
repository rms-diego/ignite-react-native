import { Text, TextInput, View } from "react-native";

import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sábado, 21 de Janeiro 2023.</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome do evento"
        placeholderTextColor={"#6B6B6B"}
      />
    </View>
  );
}
