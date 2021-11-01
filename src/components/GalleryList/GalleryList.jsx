import { useState } from "react";
import GalleryItem from'../GalleryItem/GalleryItem';

function GalleryList(props){
  
    
    return (
        <div>
            <h1>GalleryList</h1>
            { props.galleryItems.map( imageItem=>(<GalleryItem imageToSend={imageItem} getItems={props.getItems} />))}
            
            {/* map through the array create new components use props */}
            
        </div>
    )
}

export default GalleryList