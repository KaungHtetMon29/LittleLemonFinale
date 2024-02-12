import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  FlatList,
  Pressable,
  useColorScheme,
} from "react-native";
import styles from "./style";
import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import mtype from "../../utils/Select";
import mtypeall from "../../utils/selectall";
let txtcolor;
export default function Home() {
  const route = useRoute();
  const [appts, setappts] = useState([]);
  const setfuc = (d) => {
    setappts(d);
  };
  const colorscheme = useColorScheme();
  txtcolor = colorscheme === "dark" ? "white" : "black";
  useEffect(() => {
    mtypeall(route.name, setfuc);
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

const homestyle = StyleSheet.create({
  text: { color: txtcolor },
  btncolor: {
    backgroundColor: "gray",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 23,
    borderRadius: 5,
    paddingVertical: 8,
  },
});
