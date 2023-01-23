import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  FlatList,
} from "react-native";

import { styles } from "./styles";

import { Participant } from "../../components/Participant";

const participants = [
  "Diego",
  "Tatiana",
  "Lucas",
  "Thiago",
  "Ana",
  "Isa",
  "Marcelo",
  "João",
];

export function Home() {
  const handleParticipantAdd = () => {
    console.log("clique");
  };

  const participantRemove = (content: string) => {
    console.log(`Remover esse participante: ${content}`);
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
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.textButton}>+</Text>
        </TouchableOpacity>
      </View>

      {/* <FlatList
        data={participants}
        keyExtractor={(name) => name}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Participant
            key={`${item} `}
            participantName={item}
            participantRemove={participantRemove}
          />
        )}
      /> */}

      <ScrollView>
        {participants.map((participant, index) => (
          <Participant
            key={`${participant} ${index}`}
            participantName={participant}
            participantRemove={participantRemove}
          />
        ))}
      </ScrollView>
    </View>
  );
}
