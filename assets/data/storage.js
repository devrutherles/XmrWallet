import AsyncStorage from '@react-native-async-storage/async-storage';


export const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('@storage_Key', value)
    } catch (e) {
      // saving error
    }
  }


  export const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@storage_Key')
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      // error reading value
    }
  }
  