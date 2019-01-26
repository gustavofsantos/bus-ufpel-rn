import { AsyncStorage } from "react-native";

async function saveData(key, value) {
  return await AsyncStorage.setItem(key, value);
}

async function loadData(key) {
  const res = AsyncStorage.getItem(key)
  return res;
}

export default {
  saveData,
  loadData
}