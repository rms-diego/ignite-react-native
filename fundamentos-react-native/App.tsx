import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Olá mundo !</Text>
      <Text style={styles.text}>Teste</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    color: "white",
  },
});
