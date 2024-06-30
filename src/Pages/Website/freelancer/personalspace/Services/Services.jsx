import Card from "../../../../../Components/Dashboard/Card/Card";
import ServicesCountSold from "../../../../../Components/Dashboard/Services/ServicesCountSold/ServicesCountSold";
import ServicesList from "../../../../../Components/Dashboard/Services/ServicesList/ServicesList";
import SkillsByProjectsRatio from "../../../../../Components/Dashboard/SkillsByProjectsRatio/SkillsByProjectsRatio";
import { existingServices } from "./dummyServicesData";
import { Link } from "react-router-dom";


const Services = () => {


    return (
        <Link to={"/work/personalspace/services"}>
            <ServicesList />
        </Link>
    )
}

export default Services