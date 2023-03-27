import React, { Fragment,useContext,useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import {FirebaseContext,AuthContext} from '../../store/Context'
import { useNavigate } from 'react-router-dom';
const Create = () => {
const {firebase} = useContext(FirebaseContext)
const {user} = useContext(AuthContext)
  const [name , setName]  = useState('')
  const [price , setPrice]  = useState('')
  const [category , setCategory]  = useState('')
  const [image, setImage]  = useState(null)
  const navigate = useNavigate();
  const date=new Date()
  const handleSubmit = ()=>{
       firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
        ref.getDownloadURL().then((url)=>{
          console.log(url);
          firebase.firestore().collection('products').add({
            name,
            category,
            price,
            url,
            userId:user.uid,
            createdAt:date.toDateString()
          })
              navigate('/')
        })
       })
  }
  
  return (
    <Fragment>
      <Header />
      
        <div className="centerDiv">
          
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              value={name}
              onChange={(e)=> setName(e.target.value)}
              
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fame"
              value={category}
              onChange={(e)=> setCategory(e.target.value)}
              name="category"
              
            />
            <br />
            <label htmlFor="fnme">Price</label>
            <br />
            <input className="input" type="number"  value={price}
              onChange={(e)=> setPrice(e.target.value)} id="fnae" name="Price" />
            <br />
          
          <br />
          <img alt="Posts" width="200px"  height="200px" src={image ? URL.createObjectURL(image):""}></img>
          
            <br />
            <input type="file"  onChange={(e)=>{
            setImage(e.target.files[0])
          }}/>
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
          
        </div>
      
    </Fragment>
  );
};

export default Create;
