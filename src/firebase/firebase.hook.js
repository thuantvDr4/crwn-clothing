/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import {
  auth,
  signInWithGoogle,
  createUserProfileDocument,
} from "./firebase.utils";

export default () => {
  const [currentUser, setCurrentUser] = useState(null);

  //
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      //
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      //
      setCurrentUser(userAuth);
    });
    // clean-up
    return () => unsubscribeFromAuth;
  }, []);

  //signOutByFirebase
  function signOutByFirebase() {
    auth.signOut();
  }

  return { currentUser, signOutByFirebase };
};
