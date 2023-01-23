import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#1F1E25",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    paddingLeft: 16,
    marginBottom: 10,
  },

  participantName: {
    color: "#FFF",
    flex: 1,
    fontSize: 16,
  },

  button: {
    height: "100%",
    width: 56,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E23C44",
    borderRadius: 5,
    marginVertical: 30,
  },

  textButton: {
    color: "white",
    fontSize: 24,
  },
});
