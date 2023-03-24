import React from "react";
import Image from "next/image";
import './special.css'

interface SpecializedProgramProps {
  imageSrc: string;
  altText: string;
  title: string;
  subtitle: string;
}

const SpecializedProgram: React.FC<SpecializedProgramProps> = ({
  imageSrc,
  altText,
  title,
  subtitle,
}) => {
  try {
    const image = require(`/public/assets/${imageSrc}`).default;
    return (
      <div className="items-center gap-x-4 pt-4 pb-4 flex cursor-pointer">
        <div>
          <div
            className="w-28 h-20 rounded my-shadow "
            >
            <Image
              src={image}
              alt={altText}
              width={112}
              height={80}
            />
          </div>
        </div>
        <div>
          <h4 className="text-primary font-medium">{title}</h4>
          <h3 className="text-lg font-semibold">{subtitle}</h3>
        </div>
      </div>
    );
  } catch (error) {
    console.error(`Error loading image: ${error}`);
    return null;
  }
};

export default SpecializedProgram;
