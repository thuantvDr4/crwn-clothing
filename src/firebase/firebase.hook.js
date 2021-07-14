/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import {
  auth,
  signInWithGoogle,
  createUserProfileDocument,
} from "./firebase.utils";
import { setUser } from "../redux/user/user.actions";
import { useDispatch } from "react-redux";

export default () => {
  const dispatch = useDispatch();
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
          //save to -store
          setUser(dispatch, { id: snapShot.id, ...snapShot.data() });
        });
      }
      //
      setCurrentUser(userAuth);
      //save to store
      setUser(dispatch, userAuth);
      //
    });
    // clean-up
    return () => unsubscribeFromAuth;
  }, []);

  //signOutByFirebase
  function signOutByFirebase() {
    auth.signOut();
    //reset store
    setUser(dispatch, null);
    //
  }

  return { currentUser, signOutByFirebase };
};
