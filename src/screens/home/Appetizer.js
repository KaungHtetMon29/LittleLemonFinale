import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  ScrollView,
  SectionList,
  Button,
  FlatList,
} from "react-native";
import styles from "./style";
import { useCallback, useEffect, useState } from "react";
import mtype from "../../utils/Select";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";

export default function Appetizers() {
  const route = useRoute();
  const [appts, setappts] = useState([]);
  const setfuc = (d) => {
    setappts(d);
  };

  useEffect(() => {
    mtype(route.name, setfuc);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ color: "white", fontSize: 25 }}>{route.name}</Text>
      <FlatList
        style={{ paddingVertical: 12 }}
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
        data={appts}
        renderItem={({ item }) => (
          <View
            style={{
              borderRadius: 12,
              padding: 30,
              display: "flex",
              alignItems: "center",
              backgroundColor: "gray",
            }}
          >
            <Text style={{ color: "white" }}>{item.title}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}
