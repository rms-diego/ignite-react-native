import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

interface Props {
  participantName: string;
  participantRemove: (content: string) => void;
}

export function Participant({ participantName, participantRemove }: Props) {
  const handleParticipantRemove = () => {
    participantRemove(participantName);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.participantName}>{participantName}</Text>
      <TouchableOpacity style={styles.button} onPress={handleParticipantRemove}>
        <Text style={styles.textButton}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
