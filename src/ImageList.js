import React from "react";
import ImageCard from "./ImageCard";

const ImageList = props => {
  const photos = props.images.map(image => {
    return (
      <div>
        <ImageCard image={image} />
        {/* <img src={image.urls.regular} alt="pics" /> */}
      </div>
    );
  });
  return <div>{photos}</div>;
};

export default ImageList;
