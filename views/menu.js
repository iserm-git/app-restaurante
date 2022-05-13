import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Menu({ navigation }) {
  return (
    <View style={[styles.container, { flexDirection: "column" }]}>
      <View style={styles.fixToText}>
        <Button title="Menu" onPress={() => navigation.navigate("Menu")} />
        <Button title="Pedidos" onPress={() => navigation.navigate("Pedido")} />
      </View>
      <View style={{ flex: 1, backgroundColor: "darkorange" }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  fixToText: {
    flex: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
}
