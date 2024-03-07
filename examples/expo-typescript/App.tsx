import {
  KitchenProvider,
  Text as KitchenText,
} from "@tonightpass/kitchen/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <KitchenProvider>
      <View style={styles.container}>
        <Text>{"Open up App.js to start working on your app! ddd"}</Text>
        <StatusBar style={"auto"} />
        <KitchenText size={"large"}>{"hey"}</KitchenText>
      </View>
    </KitchenProvider>
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
