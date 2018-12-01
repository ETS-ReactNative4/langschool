import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import './Gallery.css';
import image1 from './img/gmail/1.jpg';
import thumbnail1 from './img/resized/1.jpg';
import image2 from './img/gmail/2.jpg';
import thumbnail2 from './img/resized/2.jpg';
import image3 from './img/gmail/3.jpg';
import thumbnail3 from './img/resized/3.jpg';
import image4 from './img/gmail/4.jpg';
import thumbnail4 from './img/resized/4.jpg';
import image5 from './img/gmail/5.jpg';
import thumbnail5 from './img/resized/5.jpg';
import image6 from './img/gmail/6.jpg';
import thumbnail6 from './img/resized/6.jpg';
import image7 from './img/gmail/7.jpg';
import thumbnail7 from './img/resized/7.jpg';
import image8 from './img/gmail/8.jpg';
import thumbnail8 from './img/resized/8.jpg';
import image9 from './img/gmail/9.jpg';
import thumbnail9 from './img/resized/9.jpg';
import image10 from './img/gmail/10.jpg';
import thumbnail10 from './img/resized/10.jpg';
import image11 from './img/gmail/11.jpg';
import thumbnail11 from './img/resized/11.jpg';
import image12 from './img/gmail/12.jpg';
import thumbnail12 from './img/resized/12.jpg';
import image13 from './img/gmail/13.jpg';
import thumbnail13 from './img/resized/13.jpg';
import image14 from './img/gmail/14.jpg';
import thumbnail14 from './img/resized/14.jpg';
import image15 from './img/gmail/15.jpg';
import thumbnail15 from './img/resized/15.jpg';



class Gallery extends Component {

    render() {
        const images = [
            {
                original: image1,
                thumbnail: thumbnail1,
              },
              {
                original: image2,
                thumbnail: thumbnail2,
              },
              {
                original: image3,
                thumbnail: thumbnail3,
              },
              {
                original: image4,
                thumbnail: thumbnail4
              },
              {
                original: image5,
                thumbnail: thumbnail5,
              },
              {
                original: image6,
                thumbnail: thumbnail6,
              },
              {
                original: image7,
                thumbnail: thumbnail7,
              },
              {
                original: image8,
                thumbnail: thumbnail8,
              },
              {
                original: image9,
                thumbnail: thumbnail9,
              },
              {
                original: image10,
                thumbnail: thumbnail10,
              },
              {
                original: image11,
                thumbnail: thumbnail11,
              },
              {
                original: image12,
                thumbnail: thumbnail12,
              },
              {
                original: image13,
                thumbnail: thumbnail13,
              },
              {
                original: image14,
                thumbnail: thumbnail14,
              },
              {
                original: image15,
                thumbnail: thumbnail15,
              }
        ]
        
        return (
            <div id="gallery">
                <p>Как это было</p>
                <ImageGallery items={images} />
            </div>
        );
    }
}

export default Gallery;