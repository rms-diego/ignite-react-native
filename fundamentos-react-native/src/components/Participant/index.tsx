import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

interface Props {
  participantName: string;
}

export function Participant({ participantName }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.participantName}>{participantName}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
