import { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  Alert,
} from "react-native";

import { styles } from "./styles";

import { Participant } from "../../components/Participant";

export function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState<string>("");

  const handleParticipantAdd = () => {
    const participantAlreadyExists = participants.includes(participantName);

    if (participantAlreadyExists) {
      setParticipantName("");
      return Alert.alert(
        "Participante já existe",
        "Já existe um participante na lista com esse nome"
      );
    }

    setParticipants((state) => [...state, participantName]);
    setParticipantName("");
  };

  const participantRemove = (content: string) => {
    Alert.alert("Remove", `Deseja remover o participante: ${content} ?`, [
      {
        text: "Sim",
        onPress: () => {
          Alert.alert("Deletado");
          setParticipants((prevState) =>
            prevState.filter((participant) => participant !== content)
          );
        },
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  };

  const handleInputChangeAddParticipant = (content: string) => {
    setParticipantName(content.trim());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sábado, 21 de Janeiro 2023.</Text>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nome do evento"
          placeholderTextColor={"#6B6B6B"}
          value={participantName}
          onChangeText={handleInputChangeAddParticipant}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.textButton}>+</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        {participants.length > 0 ? (
          participants.map((participant, index) => (
            <Participant
              key={`${participant} ${index}`}
              participantName={participant}
              participantRemove={participantRemove}
            />
          ))
        ) : (
          <View>
            <Text style={styles.textWithoutParticipants}>
              Ninguém chegou no evento ainda? Adicione participantes a lista de
              presença
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}
