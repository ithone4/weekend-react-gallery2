import axios from 'axios';
import { useState } from "react";




function GalleryItem(props){
    //const [name, setName]=useState (null);
    const [show, setShow]=useState (true); 
    const toggleShow = ()=>{ // toggle image
        setShow(!show);
    }
 

    const updateLikes=()=>{ //axios PUT request when clicked
        console.log('in updateLikes');
        axios.put( `/gallery/like/ ${props.imageToSend.id}`).then ((response)=>{
          console.log(response.data);
          props.getItems(); 
        }).catch((err)=>{
          console.log( err );
          alert( 'PUT ERROR not happening');
        })
       }
    

   
    return (
        <div>
            {
                show?
                <h1 onClick={ toggleShow }>{props.imageToSend.description}</h1>:
                <img className ="img" onClick={toggleShow} src={props.imageToSend.path} ></img>
                
            }
            <div>
             <button className="button" onClick={updateLikes}>Like</button>
             <div className="likes">Likes: {props.imageToSend.likes} </div>
             </div>
        </div>
    ) //conditional rendering from description to photo when clicked
    
}

export default GalleryItem