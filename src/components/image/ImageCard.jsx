import React from "react";
import Image from "next/image";
import testimage from "../../../public/images/testImage.jpg";
import {
  selectImageBrightness,
  selectImageSharpness,
  selectImageShadow,
  selectImageZoomLevel,
} from "@/slices/imageSlices";
import { useSelector } from "react-redux";

const ImageCard = () => {
  const imageBrightness = useSelector(selectImageBrightness);
  const imageSharpness = useSelector(selectImageSharpness);
  const imageShadow = useSelector(selectImageShadow);
  const imageZoomLevel = useSelector(selectImageZoomLevel);

  console.log(imageZoomLevel);

  const shadowAmount = 1 + imageShadow / 100;
  console.log(imageBrightness);
  // const shadow = `drop-shadow(0 0 ${imageShadow}px rgba(0, 0, 0, ${imageShadow / 100}))`;

  // const bright = `brightness-[${imageBrightness * 2}%]`;

  const bright = imageBrightness * 2;
  return (
    <div id="image" className="relative h-[90vh] misusing-so-many-things">
      <div>
        {/* make this on the sandbox and make it done */}
        {/* <div
        id="sharpness"
        className={`h-[90vh] sharpen`}
        style={{
          mixBlendMode: "hard-light",
        }}
      >
        shayan
      </div> */}
        <Image
          src={testimage}
          alt="testimage"
          className="h-[90vh]"
          style={{
            filter: `brightness(${bright}%) contrast(${shadowAmount}) saturate(${shadowAmount})`,
            transform: `scale(${imageZoomLevel})`,
            transition: "transform 0.3s ease-in-out",
          }}
        />
      </div>
    </div>
  );
};

export default ImageCard;
