import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";

import { styles } from "./styles";

import { Participant } from "../../components/Participant";

export function Home() {
  const handleParticipantAdd = () => {
    console.log("clique");
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.eventName}>Nome do evento</Text>
        <Text style={styles.eventDate}>Sábado, 21 de Janeiro 2023.</Text>

        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Nome do evento"
            placeholderTextColor={"#6B6B6B"}
          />

          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton} onPress={handleParticipantAdd}>
              +
            </Text>
          </TouchableOpacity>
        </View>

        <Participant participantName="Diego Ramos" />
        <Participant participantName="Tatiana Ramos" />
        <Participant participantName="Lucas Ramos" />
        <Participant participantName="Solange Ramos" />
      </ScrollView>
    </View>
  );
}
