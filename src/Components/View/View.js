import React,{useContext,useState,useEffect, useSyncExternalStore} from 'react';
import { FirebaseContext } from '../../store/Context';
import { PostContext } from '../../store/PostContext';
import { collection,query, where,getDocs, doc } from "firebase/firestore";

import './View.css';
function View() {

  const [userDetails,setUserDetails]= useState()
  const {postDetails} = useContext(PostContext)
  const {firebase} = useContext(FirebaseContext)
  console.log(firebase,"kkkkkkkkkkk");
 

  useEffect(async()=>{
    const {userId} = postDetails
    console.log(userId);
  //   const userRef = collection(firebase.firestore(), "users");
  //   console.log(userRef,"ghgfgh");
  //    const q = query(userRef, where("id", "==",userId))
  //  console.log(q ,"fhf") ;

  //  const querySnapshot = await getDocs(q);
  //  querySnapshot.forEach((doc) => {
  //    // doc.data() is never undefined for query doc snapshots
  //    console.log("gbdb");
  //  });



     //  q.get().then((response)=>{
    //   console.log('dfdsgdsgsgdsgsgrsg',response);
    //   response.forEach(doc =>{
    //     setUserDetails(doc.data())
    //   })
    // })
    // firebase.firestore().collection('users').get().then((res)=>{
    //   res.forEach(doc=>{
    //     console.log(doc.data().id,"Ponnapp");

    //    if(doc.data().id === userId){
    //     setUserDetails(doc.data())
    //    }
        

    //   })
    // })


    firebase.firestore().collection('users').where("id",'==',userId).get().then((response)=>{
      console.log('dfdsgdsgsgdsgsgrsg',response);
      response.forEach(doc =>{
        setUserDetails(doc.data())
      })
    })
},[])


  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
        </div>
       {userDetails && <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.username}</p>
          <p>{userDetails.phone}</p>
        </div>}
      </div>
    </div>
  );
}
export default View;