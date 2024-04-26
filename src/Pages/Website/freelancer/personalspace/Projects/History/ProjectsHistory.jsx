import Chart2 from "../../../../../../Components/Dashboard/Projects/History/Chart/Chart2"
import Card from "../../../../../../Components/Dashboard/Card/Card"
import SkillsByProjectsRatio from "../../../../../../Components/Dashboard/SkillsByProjectsRatio/SkillsByProjectsRatio"
import ProjectsHistoryComp from "../../../../../../Components/Dashboard/Projects/History/ProjectsHistory/ProjectsHistoryComp"
const projects = {
    amount : "214",
    gain : "-14%"
  }

const ProjectsHistory = () => {
    return(
            <div className="">
                <div className="mt-28 flex gap-5">
                    <Card profit={projects}/>
                    <Chart2 />
                    <SkillsByProjectsRatio isHistory={true} />
                </div> 
                <ProjectsHistoryComp />
            </div> 
    )
    
}

export default ProjectsHistory