import React from "react";
import Header from "../../../../../Components/header/Header";
import ChartThree from "../../../../../Components/Dashboard/Charts/ChartThree";
import Card from "../../../../../Components/Dashboard/Card/Card";
import SkillsByProjectsRatio from "../../../../../Components/Dashboard/SkillsByProjectsRatio/SkillsByProjectsRatio";
import MyServices from "../../../../../Components/Dashboard/MyServices/MyServices";
import LatestProjects from "../../../../../Components/Dashboard/LatestProjects/LatestProjects";

const FDashboard = () => {
  const profit = {
    amount: "$1700",
    gain: "+25%"
  };
  const projects = {
    amount: "214",
    gain: "-14%"
  };

  return (
    <div className="my-24 flex flex-col gap-8">
      <div className="flex flex-col lg:flex-row gap-8 max-lg:gap-0">
        <div className="flex flex-col gap-8 w-full lg:w-4/6">
          <div className="flex flex-col lg:flex-row gap-6">
            <Card profit={profit} />
            <Card profit={projects} />
          </div>
          <MyServices />
        </div>
        <SkillsByProjectsRatio />
      </div>
      <div className="w-full">
        <LatestProjects />
      </div>
    </div>
  );
};

export default FDashboard;
