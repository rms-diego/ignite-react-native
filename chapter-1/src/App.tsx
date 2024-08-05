import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Text>Aoba</Text>
        </View>

        <View style={styles.contentContainer}>
          <Text>Aoba</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
  },

  yellowColor: {
    backgroundColor: "yellow",
  },
});
