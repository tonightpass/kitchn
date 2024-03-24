import {
  KitchnProvider,
  Text as KitchnText,
} from "@tonightpass/kitchn/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <KitchnProvider>
      <View style={styles.container}>
        <Text>{"Open up App.js to start working on your app! ddd"}</Text>
        <StatusBar style={"auto"} />
        <KitchnText size={"large"}>{"hey"}</KitchnText>
      </View>
    </KitchnProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
