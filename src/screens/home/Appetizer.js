import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  ScrollView,
  SectionList,
  Button,
  FlatList,
  useColorScheme,
} from "react-native";
import styles from "./style";
import { useCallback, useEffect, useState } from "react";
import mtype from "../../utils/Select";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";
let txtcolor;
export default function Appetizers() {
  const route = useRoute();
  const [appts, setappts] = useState([]);
  const setfuc = (d) => {
    setappts(d);
  };
  const colorscheme = useColorScheme();
  txtcolor = colorscheme === "dark" ? "white" : "black";
  useEffect(() => {
    mtype(route.name, setfuc);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ color: txtcolor, fontSize: 25 }}>{route.name}</Text>
      <FlatList
        style={{ paddingVertical: 12 }}
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
        data={appts}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              borderRadius: 12,
              padding: 30,
              display: "flex",
              alignItems: "center",
              backgroundColor: colorscheme === "dark" ? "white" : "black",
            }}
          >
            <Text
              style={{
                color: colorscheme === "dark" ? "black" : "white",
                fontSize: 14,
              }}
            >
              {item.title}
            </Text>
            <Text
              style={{
                color: colorscheme === "dark" ? "black" : "white",
                fontSize: 14,
              }}
            >
              {item.price}$
            </Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}
