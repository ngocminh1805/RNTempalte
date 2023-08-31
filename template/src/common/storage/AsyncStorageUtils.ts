import AsyncStorage, { useAsyncStorage } from '@react-native-async-storage/async-storage';


 ///useAsyncStorage

const storeData = async (key: string, value: any) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {

    // saving error
  }
};

const getData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value != null ? JSON.parse(value) : null;
  } catch (e) {
    // error reading value
  }
};

const deleteData = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    // remove error
  }
};

const clearStorage = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {}
};
