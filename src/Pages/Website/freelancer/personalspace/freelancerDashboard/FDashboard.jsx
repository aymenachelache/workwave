import React from "react";
import Header from "../../../../../Components/header/Header";
import ChartThree from "../../../../../Components/Dashboard/Charts/ChartThree";
import Card from "../../../../../Components/Dashboard/Card/Card";
import SkillsByProjectsRatio from "../../../../../Components/Dashboard/SkillsByProjectsRatio/SkillsByProjectsRatio";
import MyServices from "../../../../../Components/Dashboard/MyServices/MyServices";
import LatestProjects from "../../../../../Components/Dashboard/LatestProjects/LatestProjects";

const FDashboard = () => {
  const profit = {
    amount : "$1700",
    gain : "+25%"
  }
  const projects = {
    amount : "214",
    gain : "-14%"
  }

  

  return (
    <div className="mt-24 w-[60%] flex flex-col gap-8">
      <div className="flex gap-8 max-md:block">
        <div className="flex flex-col gap-8 w-full min-lg:w-[80%]">
          <div className="flex gap-6 max-lg:block">
            <Card profit={profit}/>
            <Card profit={projects}/>
          </div>
          <MyServices />
        </div>
        <SkillsByProjectsRatio />
      </div>
      <div className="w-[153%]">
        <LatestProjects />
      </div>
    </div>
  );
};

export default FDashboard;