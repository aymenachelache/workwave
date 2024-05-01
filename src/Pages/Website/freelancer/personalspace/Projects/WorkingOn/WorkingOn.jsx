import Calendar from "../../../../../../Components/Dashboard/Projects/Calendrie/Calendar";
import ProjectCard from "../../../../../../Components/Dashboard/Projects/Card/ProjectCard"
import ClientCard from "../../../../../../Components/Dashboard/Projects/ClientCard/ClientCard"
import Deliverables from "../../../../../../Components/Dashboard/Projects/Deliverables/Deliverables";


const WorkingOn = () => {

    
    return(
        <div className="gap-8 w-full">
            <div className="flex flex-wrap gap-6 items-center">
                <ProjectCard />
                
                <div className="font-Unbounded w-[25%] flex justify-center items-center border-2 border-PrimColor rounded-3xl h-40">
                    <Calendar />
                </div>

                <ClientCard />
            </div>
            <Deliverables />

        </div>
    )
}
export default WorkingOn

//todo : Calendar