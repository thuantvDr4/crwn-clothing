import React, { useEffect, useState } from "react";
import "./CollectionOverview.styles.scss";
import { useSelector, useDispatch } from "react-redux";
import CollectionPreview from "../collections/CollectionPreview.Component";
import { shopSelector } from "../../../redux/selector";
import { updateShopCollections } from "../../../redux/shop/shop.actions";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../../firebase/firebase.utils";

//------------------->COMPONENT
const CollectionOverview = () => {
  //
  const dispatch = useDispatch();
  //
  const { collections } = useSelector(shopSelector);
  //
  const [myCollections, setMyCollections] = useState([]);

  //get collection from firebase-store
  useEffect(() => {
    //
    let unsubcribeFromSnapshot = null;
    //
    const collectionRef = firestore.collection("collections");
    collectionRef.onSnapshot(async (snapshot) => {
      //
      const _collectionObj = convertCollectionsSnapshotToMap(snapshot);

      //save to store
      updateShopCollections(dispatch, _collectionObj);
      //
    });

    //clean
    return () => unsubcribeFromSnapshot;
  }, []);

  //get collection from redux-store
  useEffect(() => {
    if (collections) {
      const _collectionArray = Object.values(collections);
      setMyCollections(_collectionArray);
    }
  }, [collections]);

  //
  return (
    <div className="collection-overview">
      {!myCollections.length
        ? null
        : myCollections.map((collection, index) => {
            return <CollectionPreview key={"KEY:" + index} {...collection} />;
          })}
    </div>
  );
};

export default CollectionOverview;
