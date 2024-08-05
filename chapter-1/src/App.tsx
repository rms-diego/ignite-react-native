import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Text style={styles.text}>Welcome, Diego</Text>

        <TextInput
          style={styles.input}
          placeholder="New Skill"
          placeholderTextColor="#666"
        />

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
        >
          <Text style={styles.text}>Add</Text>
        </TouchableOpacity>

        <Text style={[styles.text, { marginTop: 15 }]}>My skills</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121015",
    paddingVertical: 70,
    paddingHorizontal: 50,
    gap: 10,
  },
  text: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },

  input: {
    backgroundColor: "#1f1e25",
    color: "white",
    fontSize: 18,
    padding: 13,
    borderRadius: 10,
  },
  button: {
    marginTop: 15,
    backgroundColor: "#666",
    color: "white",
    fontSize: 18,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
});
