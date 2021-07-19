import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDQN2NVcxcA-0KRZhhl6hxa4TbO337sg8Y",
  authDomain: "crwn-db-316b9.firebaseapp.com",
  projectId: "crwn-db-316b9",
  storageBucket: "crwn-db-316b9.appspot.com",
  messagingSenderId: "1005483139118",
  appId: "1:1005483139118:web:be0bc3e410bec701b9bfbf",
  measurementId: "G-XSFPZKYKMP",
};
//
export const createUserProfileDocument = async (userAuth, additionData) => {
  if (!userAuth) return;
  //
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  //check user exist or no
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    //
    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionData,
      });
    } catch (err) {
      console.log("[error creating user]--", err.message);
    }
  }
  return userRef;
};
//
// add-new collection& document
export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  //
  const batch = firestore.batch();
  objectToAdd.forEach((ojb) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, ojb);
  });
  return await batch.commit();
};

//
export const convertCollectionsSnapshotToMap = (collections) => {
  const _transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });
  //
  return _transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
  //
};

//initial-->
firebase.initializeApp(config);
//
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
// set pop-up login GG
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

//
export default firebase;
