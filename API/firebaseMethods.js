import * as firebase from "firebase";
import "firebase/firestore";
import {Alert} from "react-native";

export async function registration(email, password, lastName, firstName) {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    const currentUser = firebase.auth().currentUser;

    const db = firebase.firestore();
    db.collection("keys")
      .doc(currentUser.uid)
      .set({
        email: currentUser.email,
        lastName: lastName,
        firstName: firstName,
      });
  } catch (err) {
    Alert.alert("There is something wrong!!!!", err.message);
  }
}

