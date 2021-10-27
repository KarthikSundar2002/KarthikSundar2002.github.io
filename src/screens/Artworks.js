import React from 'react'
import {Carousel} from 'react-carousel-minimal';
import "../assets/artworks.css";

const Artworks = () => {
  const data = [
    {
      image: "/1.jpeg",
    },
    {
      image: "/2.jpeg",
    },
    {
      image: "/3.jpeg",
    },
    {
      image: "/4.jpeg",
    },
    {
      image: "/5.jpeg",
    },
    {
      image: "/untitled.png",
    },
    {
      image: "/untitled2.png",
    },
    {
      image: "/6.jpeg",
    },
    {
      image: "/7.jpeg",
    }
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }

    return (
      <div>
      <div className="art-carousel" style={{ textAlign: "center" }}>
        <h1>Artworks</h1>
        <p>Some of my best works, to see more check out my <a href="https://instagram.com/karthiksundar2002">Instagram</a> and <a href="https://www.behance.net/karthiksundar2">Behance</a> profile</p>
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={data}
            time={2000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
    )
}

export default Artworks
