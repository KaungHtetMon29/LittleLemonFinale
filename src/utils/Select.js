import db from "./connectdb";
import * as SQLite from "expo-sqlite";
const mtype = (type, set) => {
  db.transaction((tx) => {
    tx.executeSql(
      `select * from menu where category=?`,
      [type],
      (_, { rows }) => {
        console.log("this is menu alignItems");
        console.log(rows._array);
        set(rows._array);
      }
    );
  });
};
export default mtype;
