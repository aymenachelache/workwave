import React from "react";
import { Chart } from "react-google-charts";

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
        <div className="shadow-xl p-8  rounded-2xl w-fit">
          <p className="font-semibold text-PrimColor text-opacity-50 mb-4">Skills By Projects Ration</p>
          {!isHistory ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="217" height="217" viewBox="0 0 217 217" fill="none">
            <path d="M203.438 108.5C210.928 108.5 217.087 114.596 216.154 122.028C213.881 140.112 207.077 157.411 196.278 172.275C182.81 190.812 163.82 204.609 142.028 211.69C120.237 218.77 96.7632 218.77 74.9716 211.69C57.4985 206.012 41.8262 196.016 29.3578 182.721C24.2339 177.258 25.6341 168.706 31.6939 164.303C37.7538 159.9 46.1666 161.345 51.5137 166.59C60.4493 175.356 71.3333 181.987 83.3537 185.892C99.6974 191.203 117.303 191.203 133.646 185.892C149.99 180.582 164.233 170.234 174.334 156.331C181.763 146.106 186.671 134.344 188.747 122C189.99 114.614 195.947 108.5 203.438 108.5Z" fill="#00AEEF"/>
            <path d="M24.6226 152.971C18.0048 156.48 9.70758 153.98 7.05134 146.976C1.39868 132.072 -0.920632 116.05 0.329687 100.048C1.58001 84.046 6.35972 68.5787 14.2587 54.7335C17.9705 48.2275 26.5554 47.0464 32.5478 51.5404C38.5403 56.0344 39.6381 64.4994 36.2006 71.1544C31.2402 80.7577 28.2213 91.295 27.3723 102.161C26.5232 113.027 27.8688 123.906 31.2775 134.163C33.6396 141.271 31.2403 149.463 24.6226 152.971Z" fill="#F5675C"/>
            <path d="M41.1369 41.602C35.8221 36.3239 35.7468 27.6585 41.6464 23.0432C53.9326 13.4317 68.1917 6.54832 83.4735 2.92575C103.171 -1.74352 123.781 -0.809248 142.976 5.62294C162.17 12.0551 179.181 23.7287 192.088 39.3239C202.101 51.4232 209.333 65.5085 213.347 80.5824C215.274 87.8206 209.993 94.6909 202.571 95.7008C195.149 96.7106 188.422 91.456 186.195 84.3044C183.057 74.2278 177.975 64.8151 171.191 56.6179C161.511 44.9215 148.752 36.1664 134.357 31.3422C119.961 26.5181 104.503 25.8174 89.7301 29.3193C79.3768 31.7736 69.6494 36.2234 61.0731 42.3745C54.9864 46.74 46.4517 46.8801 41.1369 41.602Z" fill="#37B778"/>
          </svg>
          ) : (
            <div className="flex gap-1">
              <span className="bg-PrimColor rounded-full h3  w-1/3"></span>
              <span className="bg-red-500 rounded-full h-3 w-1/6"></span>
              <span className="bg-SecColor rounded-full h3  flex-grow"></span>
            </div>
          )}
          
          <ul className="font-semibold mt-6">
              {data.map((dataPiece, index) => {
                if (index > 0) return (
                  <li key={index} className="pl-4 items-center flex">
                    <div className={`h-2 w-2 rounded-full ${colors[index]}`}></div>
                    <div className="flex justify-between items-center w-full mx-3">
                      <div className="">{dataPiece[0]}</div>
                      <div className="font-medium text-sm">{dataPiece[1]} Project</div>
                    </div>
                  </li>
                  )
              })}

          </ul>
          
        </div>
        
      )
      
};

export default SkillsByProjectsRatio;
