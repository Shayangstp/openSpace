import React from "react";
import Image from "next/image";
import testimage from "../../../public/images/testImage.jpg";

const ImageCard = () => {
  return (
    <div id="image">
      <Image src={testimage} alt="test image" className="h-[90vh] object-fill" />
    </div>
  );
};

export default ImageCard;
