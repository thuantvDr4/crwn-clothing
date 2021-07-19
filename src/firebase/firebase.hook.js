/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import {
  auth,
  signInWithGoogle,
  createUserProfileDocument,
  addCollectionAndDocuments,
} from "./firebase.utils";
import { setUser } from "../redux/user/user.actions";
import { useDispatch, useSelector } from "react-redux";
import { shopSelector } from "../redux/selector";

export default () => {
  const dispatch = useDispatch();
  const { collections } = useSelector(shopSelector);
  const [currentUser, setCurrentUser] = useState(null);

  //
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      //
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          // save local
          // setCurrentUser({
          //   id: snapShot.id,
          //   ...snapShot.data(),
          // });

          //save to -store
          setUser(dispatch, { id: snapShot.id, ...snapShot.data() });
        });
      }
      //save local
      // setCurrentUser(userAuth);

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

  //createCollectionsData
  async function createCollectionsData() {
    const _collectioArray = Object.values(collections);
    //
    await addCollectionAndDocuments(
      "collections",
      _collectioArray.map(({ title, items }) => ({ title, items }))
    );
    //
  }

  return { signOutByFirebase, createCollectionsData };
};
