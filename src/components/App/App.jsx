import React, { useEffect, useState } from 'react';
import GalleryList from '../GalleryList/GalleryList';
import './App.css';
import axios from 'axios';


function App() {
 const [galleryItems, setgalleryItems]= useState( [] );

useEffect( ()=>{
  console.log ( 'component loaded');
  getItems();
  
}, []); 

const getItems=()=>{ 
 axios.get( '/gallery' ).then ((response)=>{
   console.log(response.data);
   setgalleryItems (response.data);
 }).catch((err)=>{
   console.log( err );
   alert( 'GET Error');
 })
}

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">The Sopranos</h1>
        </header>
        <GalleryList galleryItems={galleryItems}
        getItems={ getItems} 
        />
       
          
      </div>
    );
}

export default App;
