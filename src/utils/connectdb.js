import * as SQLite from "expo-sqlite";
const db = SQLite.openDatabase("menudb");
export default db;
