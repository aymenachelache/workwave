import React from "react";
import PieChart from "../Projects/History/Chart/PieChart";
import { data as PieData } from "../Projects/History/Chart/dummydata";

export const data = [
   ["Project", "Number"],
   ["Skill 1", 11],
   ["Skill 2", 2],
   ["Skill 3", 5],

 ];

export const options = {
   title: "My Projects",
   pieHole: 0.4,
   is3D: false,
 };
 const colors = ["", "bg-red-500" , " bg-green-500", " bg-blue-500"]


const SkillsByProjectsRatio = ({isHistory}) => {

      return (
        <div className="flex h-fit flex-col max-md:flex-row shadow-xl p-8 lg:p-4 rounded-2xl w-fit flex-grow max-md:w-full justify-center items-center">
          {!isHistory ? (
            <div className="h-[390px] max-md:h-full max-md:p-0 w-[80%]">
              <p className="font-semibold text-PrimColor text-opacity-50 mb-4 px-4 text-left">Skills By Projects Ratio</p>  
              <PieChart data={PieData} />
            </div>
          ) : (
            <>
              <p className="font-semibold text-PrimColor text-opacity-50 mb-4 text-left">Skills By Projects Ratio</p>  
              <div className="flex gap-1">
                <span className="bg-PrimColor rounded-full h3  w-1/3"></span>
                <span className="bg-red-500 rounded-full h-3 w-1/6"></span>
                <span className="bg-SecColor rounded-full h3  flex-grow"></span>
              </div>
            </>
          )}
          
          <ul className="font-semibold pt-16 max-sm:hidden">
              {data.map((dataPiece, index) => {
                if (index > 0) return (
                  <li key={index} className="items-center flex font-Unbounded my-2">
                    <div className={`h-2 w-2 rounded-full mr-1 ${colors[index]}`}></div>
                    <div className="flex justify-between items-center w-full text-xs gap-2 font-light">
                      <div className="">{dataPiece[0]}</div>
                      <div className="text-xs">{dataPiece[1]} Project</div>
                    </div>
                  </li>
                  )
              })}

          </ul>
          
        </div>
        
      )
      
};

export default SkillsByProjectsRatio;
