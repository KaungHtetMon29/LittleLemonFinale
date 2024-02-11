import { View, Text, StatusBar, StyleSheet } from "react-native";
import styles from "./style";

export default function Beverages() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Open up App.js to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
