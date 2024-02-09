import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  useColorScheme,
} from "react-native";

import { useEffect, useState } from "react";
import Home from "./src/screens/home/Home";
import { Feather } from "@expo/vector-icons";

export default function App() {
  const Tab = createMaterialTopTabNavigator();
  const theme = useColorScheme();
  const [test, settest] = useState("");
  const handleenter = (e) => {
    Alert.alert("e");
  };
  useEffect(() => {
    console.log(theme);
  }, []);

  return (
    <NavigationContainer theme={theme === "dark" ? DarkTheme : DefaultTheme}>
      <View style={styles.searchbar}>
        <Feather name="search" size={24} color="black" />
        <TextInput
          style={{ flex: 1 }}
          placeholder="Search"
          value={test}
          onChange={settest}
          onSubmitEditing={handleenter}
        />
      </View>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Home1" component={Home} />
        <Tab.Screen name="Home2" component={Home} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "#fff",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  searchbar: {
    display: "flex",
    gap: 4,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
});
