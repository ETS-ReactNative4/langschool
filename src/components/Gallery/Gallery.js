import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import './Gallery.css';



class Gallery extends Component {

    render() {
        const images = [
            {
                original: image1,
                thumbnail: thumbnail1,
              },
              {
                original: image2,
                thumbnail: thumbnail1
              }
        ]
        
        return (
            <div id="gallery">
                <ImageGallery items={images} />
            </div>
        );
    }
}

export default Gallery;