import ProjectsByMonths from "../../../../../../Components/Dashboard/Projects/History/Chart/ProjectsByMonths"
import { barsData } from "../../../../../../Components/Dashboard/Projects/History/Chart/dummydata"

const ProjectsHistory = () => {
    return(
                <div>
                    <ProjectsByMonths data={barsData} />
                </div> 
    )
    
}

export default ProjectsHistory