import Card from "../../../../../Components/Dashboard/Card/Card";
import ServicesCountSold from "../../../../../Components/Dashboard/Services/ServicesCountSold/ServicesCountSold";
import ServicesList from "../../../../../Components/Dashboard/Services/ServicesList/ServicesList";
import SkillsByProjectsRatio from "../../../../../Components/Dashboard/SkillsByProjectsRatio/SkillsByProjectsRatio";
import { existingServices } from "./dummyServicesData";



const Services = () => {
    const profit = {
        amount : "$1700",
        gain : "+25%"
        
    }

    const servicesCountSold = {
        count : "11",
        Sold : "25"
    }


    return (
        <div className="">
            <div className="flex gap-5 flex-wrap">
                <Card profit={profit}/>
                <SkillsByProjectsRatio isHistory={true} />
                <ServicesCountSold service={servicesCountSold} />
            </div>
            <ServicesList data={[]} />
        </div>
    )
}

export default Services