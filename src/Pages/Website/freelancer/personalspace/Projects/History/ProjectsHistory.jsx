import Card from "../../../../../../Components/Dashboard/Card/Card"
import SkillsByProjectsRatio from "../../../../../../Components/Dashboard/SkillsByProjectsRatio/SkillsByProjectsRatio"
import ProjectsHistoryComp from "../../../../../../Components/Dashboard/Projects/History/ProjectsHistory/ProjectsHistoryComp"
import ProjectsByMonths from "../../../../../../Components/Dashboard/Projects/History/Chart/ProjectsByMonths"
import { barsData } from "../../../../../../Components/Dashboard/Projects/History/Chart/dummydata"
const projects = {
    amount : "214",
    gain : "-14%"
  }

const ProjectsHistory = () => {
    return(
            <div className="">
                <div className="flex gap-5 flex-wrap">
                    <Card profit={projects}/>
                    <ProjectsByMonths data={barsData} />
                </div> 
                <ProjectsHistoryComp />
            </div> 
    )
    
}

export default ProjectsHistory