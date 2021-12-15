
 export const saveLocal = async () => {
    try {
      await AsyncStorage.setItem("@IMPORT", key);
      //alert('Data successfully saved')
    } catch (e) {
      //alert('Failed to save the data to the storage')
    }
  };


  export const enviarFirebase = async () => {
    try {
      await setDoc(doc(firestore, "Keys", key), {
        keys: key,
      });
    } catch (error) {
      alert("Error adding document: ", error);
    }
  };


  