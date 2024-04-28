import Card from "../../../../../Components/Dashboard/Card/Card";
import ServicesCountSold from "../../../../../Components/Dashboard/Services/ServicesCountSold/ServicesCountSold";
import SkillsByProjectsRatio from "../../../../../Components/Dashboard/SkillsByProjectsRatio/SkillsByProjectsRatio";



const Services = () => {
    const profit = {
        amount : "$1700",
        gain : "+25%"
        
    }

    const service = {
        count : "11",
        Sold : "25"
    }
    return (
        <div className="mt-28">
            <div className="flex gap-5 flex-wrap">
                <Card profit={profit}/>
                <SkillsByProjectsRatio isHistory={true} />
                <ServicesCountSold service={service} />
            </div>
        </div>
    )
}

export default Services