import ProjectCard from "../../../../../../Components/Dashboard/Projects/Card/ProjectCard"
import ClientCard from "../../../../../../Components/Dashboard/Projects/ClientCard/ClientCard"
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from "dayjs";
import SendBtn from "../../../../../../Components/Dashboard/Projects/SendBtn/SendBtn";
import Deliverables from "../../../../../../Components/Dashboard/Projects/Deliverables/Deliverables";


const WorkingOn = () => {

    
    return(
        <div className="mt-20 gap-8 w-full">
            <div className="flex flex-wrap gap-6 items-center">
                <ProjectCard />
                
                <div className="font-Unbounded w-[25%] flex justify-center items-center border-2 border-PrimColor rounded-3xl h-40">
                    Calendar
                </div>

                <ClientCard />
            </div>
            <Deliverables />

        </div>
    )
}
export default WorkingOn

//todo : Calendar