/* eslint-disable react/jsx-key */
import { FC } from "react";
interface Iprops{
    header:string;
    description:string;
    number:string;
    haveBorder?:boolean;
}
const BoxDesign:FC<Iprops> = ({header,description,number,haveBorder=true}) => {
  return (
    <div className={`${haveBorder && "border"} rounded-md relative flex flex-col justify-center flex-1 px-6 py-16`}>
    <h4 className="font-bold text-lg ">{header}</h4>
    <p className="text-slate-600 mt-2">
      {description}
    </p>
    <span className="absolute -top-10 right-9 text-[170px] font-bold text-gray-200 -z-10">
      {number}
    </span>
  </div>
  )
  }
export default BoxDesign
