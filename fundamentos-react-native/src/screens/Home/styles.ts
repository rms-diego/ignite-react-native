import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
  },

  eventName: {
    color: "#FDFCFE",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
  },

  eventDate: {
    color: "#6B6B6B",
    fontSize: 16,
  },

  input: {
    justifyContent: "center",
    alignItems: "center",
    height: 56,
    borderRadius: 5,
    backgroundColor: "#1F1E25",
    color: "#FFF",
    padding: 16,
    fontSize: 20,
  },

  button: {
    height: 56,
    width: 56,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#31CF67",
    borderRadius: 5,
    marginVertical: 30,
  },

  textButton: {
    color: "white",
    fontSize: 24,
  },
});
