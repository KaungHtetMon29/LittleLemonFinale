import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";

import {
  Alert,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  useColorScheme,
  StatusBar,
} from "react-native";

import { useEffect, useState } from "react";
import Home from "./src/screens/home/Home";
import { Feather } from "@expo/vector-icons";
import useFetcher from "./src/utils/Fetcher";

import Appetizers from "./src/screens/home/Appetizer";
import Salads from "./src/screens/home/Salads";
import Beverages from "./src/screens/home/Beverages";
import { RecoilRoot } from "recoil";
import mtype from "./src/utils/Select";
import db from "./src/utils/connectdb";

// const db = openDatabase("menudb");
export default function App() {
  const Tab = createMaterialTopTabNavigator();
  const theme = useColorScheme();
  const [test, settest] = useState("");
  const handleenter = (e) => {
    Alert.alert("e");
  };
  const data = useFetcher();
  const [menuitems, setmenuitems] = useState();
  const createdb = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "create table if not exists menu (id integer primary key not null, title text, price integer, category text)"
      );
    });
  };
  const insetdb = (d) => {
    db.transaction((tx) => {
      tx.executeSql(
        "insert into menu (id,title, price, category) values (?,?, ?, ?)",
        [d.id, d.title, d.price, d.category.title]
      );
    });
  };
  const dbdat = () =>
    db.transaction((tx) => {
      tx.executeSql("select * from menu", [], (_, { rows }) => {
        console.log("this is menu alignItems");
        console.log(rows._array);
        setmenuitems(rows._array);
      });
    });
  useEffect(() => {
    createdb();
    data.menu &&
      data.menu.map((d) => {
        insetdb(d);
      });
    dbdat();
  }, []);
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <SafeAreaView
        style={{
          flex: 1,
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        }}
      >
        <NavigationContainer
          theme={theme === "dark" ? DarkTheme : DefaultTheme}
        >
          <View style={[styles.searchbar, styles.bg]}>
            <Feather name="search" size={24} color="white" />
            <TextInput
              style={[{ flex: 1 }, styles.searchtext]}
              placeholder="Search"
              placeholderTextColor="white"
              value={test}
              onChange={settest}
              onSubmitEditing={handleenter}
            />
          </View>
          <Tab.Navigator>
            <Tab.Screen name="Appetizers" component={Appetizers} />
            <Tab.Screen name="Salads" component={Appetizers} />
            <Tab.Screen name="Beverages" component={Appetizers} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </View>
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
  searchtext: { color: "white" },
  bg: { backgroundColor: "#000" },
  searchbar: {
    display: "flex",
    gap: 20,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
});
