import db from "./connectdb";
import * as SQLite from "expo-sqlite";
const mtypeall = (type, set) => {
  db.transaction((tx) => {
    tx.executeSql(`select * from menu`, [], (_, { rows }) => {
      console.log("this is menu alignItems");
      console.log(rows._array);
      set(rows._array);
    });
  });
};
export default mtypeall;
