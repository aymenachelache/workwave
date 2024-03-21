import Button from "../../../Components/Button/Button";
import Footer from "../../../Components/footer/Footer";
import Header from "../../../Components/header/Header";
import './LandingPage.scss';
import { primaryColor } from "../../../Components/Variables/VariablesColors";
import TextGradient from "../../../Components/textGradient/TextGradient";
import image1 from '../../../assets/mastercard.png'
import image2 from '../../../assets/pexels-tima-miroshnichenko-6694543 1.png'
import image3 from '../../../assets/phones.png'
import image4 from '../../../assets/laptop.png'
import image5 from '../../../assets/phone.png'
import LandingCard from "../../../Components/landingCard/LandingCard";
import categorie1 from '../../../assets/categorie1.png'
import categorie2 from '../../../assets/categorie2.png'
import categorie3 from '../../../assets/categorie3.png'
import categorie4 from '../../../assets/categorie4.png'
import categorie5 from '../../../assets/categorie5.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";



export default function LandingPage() {
    return (
        <>
            <Header />
            <div className="landing">
                <div className="hero">
                    <div className="container mx-auto w-full h-screen flex flex-col justify-center">
                        <div className="text text-center md:text-left">
                            <h1 className="text-white text-3xl">Ride the WorkWave and Catch the Perfect <TextGradient text='Wave of Opportunities!' /></h1>
                            <p className="text-white mt-5 tracking-wider text-lg">Unlock opportunities to earn reliable income, all while working from home.</p>
                        </div>
                        <div className="buttons mt-7 flex justify-center md:justify-start  gap-6">
                            <Button text='Find work opportunities' clicked={false} color={primaryColor} border />
                            <Button text='I want to hire' color='#fff' object={<FontAwesomeIcon icon={faArrowRight} style={{marginLeft: '10px'}} />} clicked />
                        </div>
                    </div>
                </div>
                <div className="advantages">
                    <div className="container mx-auto">
                        <h2 className="text-center py-20"><TextGradient text='Why WorkWave?' size='30px' weight='800' /></h2>
                        <div className="boxes grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-10">
                            <LandingCard classes='box box1 flex flex-col justify-center text-center sm:text-left px-10 py-10 sm:py-2' color='#37B778' background='#37B77826' title='Security' desc='Reliable and secure payment system ensures timely transactions between freelancers and clients.' />
                            <div className="box box2 md:col-span-2">
                                <img src={image1} alt="" style={{ width: '100%', height: '100%' }} />
                            </div>
                            <div className="box box3">
                                <img src={image2} alt="" style={{ width: '100%', height: '100%' }} />
                            </div>
                            <div className="box box4">
                                <img src={image3} alt="" style={{ width: '100%', height: '100%' }} />
                            </div>
                            <LandingCard classes='box box5 flex flex-col justify-center text-center sm:text-left px-10 py-10 sm:py-2' color='#00AEEF' background='#00AEEF26' title='Freedom' desc='Various withdrawal options, with multiple payment methods, we give full control of your earnings.' />
                            <LandingCard classes='box box6 flex flex-col justify-center text-center sm:text-left px-10 py-10 sm:py-2' color='#BF22FD' background='#BF22FD26' title='Toolbox' desc='Variety of easy-to-use tools, such as our IMS (Integrated Messaging System) which makes the communication easier, financial tracker which allows you to check your account balance and track your account movements...' />
                            <div className="box box7">
                                <img src={image4} alt="" style={{ width: '100%', height: '100%' }} />
                            </div>
                            <div className="box box8">
                                <img src={image5} alt="" style={{ width: '100%', height: '100%' }} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="categories">
                    <div className="container mx-auto my-32 px-20 py-16 text-white flex flex-col md:flex-row items-center justify-between gap-2">
                        <div className="left w-full md:w-6/12 p-2 mb-10 md:mb-0">
                            <h3 className="text-3xl font-bold mb-5">Many categories just to set you up!</h3>
                            <p className="mb-10">We offer all the categories and fields that are available on the freelance market, you can start working in the field that you are skilled in, in just few clicks.</p>
                            <Button text="Join us" color='#fff' object={<FontAwesomeIcon icon={faArrowRight} style={{marginLeft: '8px'}} />} clicked border />
                        </div>
                        <div className="right grid grid-cols-3 gap-3">
                            <div className="box p-4 text-center cursor-pointer">
                                <img src={require('../../../assets/categorie1.png')} alt="" className="mx-auto" />
                                <h5 className="mt-4 text-xs">Design & creativity</h5>
                            </div>
                            <div className="box p-4 text-center cursor-pointer">
                                <img src={require('../../../assets/categorie2.png')} alt="" className="mx-auto" />
                                <h5 className="mt-4 text-xs">Multimedia</h5>
                            </div>
                            <div className="box p-4 text-center cursor-pointer">
                                <img src={require('../../../assets/categorie3.png')} alt="" className="mx-auto" />
                                <h5 className="mt-4 text-xs">Digital marketing</h5>
                            </div>
                            <div className="box p-4 text-center cursor-pointer">
                                <img src={require('../../../assets/categorie4.png')} alt="" className="mx-auto" />
                                <h5 className="mt-4 text-xs">Writing & translation</h5>
                            </div>
                            <div className="box p-4 text-center cursor-pointer">
                                <img src={require('../../../assets/categorie5.png')} alt="" className="mx-auto" />
                                <h5 className="mt-4 text-xs">Development</h5>
                            </div>
                            <div className="box p-4 text-center cursor-pointer flex justify-center items-center">
                                <Button text='View more' color='#f9f7f38a' object={<FontAwesomeIcon icon={faArrowRight} style={{marginLeft: '8px'}} />} clicked />
                            </div>

                        </div>
                    </div>
                </div>
                <div className="advantages">
                    <div className="container mx-auto">
                        <h2 className="text-center py-20"><TextGradient text='How it works?' size='30px' weight='800' /></h2>
                        <div className="boxes grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
                            <LandingCard classes='box box1 flex flex-col text-center sm:text-left p-10' color='#37B778' background='#37B77826' title='Share an offer' desc='Share an offer of a service in our services marketplace, and wait for a client to hire you.' />
                            <LandingCard classes='box box1 flex flex-col text-center sm:text-left p-10' color='#37B778' background='#37B77826' title='Make a deal' desc='The client tells you about what you wil do, so you use your skills and make his needs into reality, then you upload your work, so the client take it, once he approves it, you are good to go.' />
                            <LandingCard classes='box box1 flex flex-col text-center sm:text-left p-10' color='#37B778' background='#37B77826' title='Get paid' desc='Once the client approved your delivery, you will get paid, which means the money will be sent and added to your balance in WorkWave, so you can withdraw it with the method you want, by the payment method you desire.' />
                            <p className="col-span-full my-5">You don’t want to get through this process? Well, we made you another choice :</p>
                            <LandingCard classes='box box5 flex flex-col text-center sm:text-left p-10' color='#00AEEF' background='#00AEEF26' title='Choose a need' desc='Consult client needs and choose one you are capable of doing within the client terms, then apply for it.' />
                            <LandingCard classes='box box5 flex flex-col text-center sm:text-left p-10' color='#00AEEF' background='#00AEEF26' title='Make a deal' desc='Once you get chosen by the client, you start working on his project, when you finalize it, you upload it so the client can take it, when the client approves it, you are good to go.' />
                            <LandingCard classes='box box5 flex flex-col text-center sm:text-left p-10' color='#00AEEF' background='#00AEEF26' title='Get paid' desc='Once the client approved your delivery, you will get paid, which means the money will be sent and added to your balance in WorkWave, so you can withdraw it with the method you want, by the payment method you desire.' />

                        </div>
                    </div>
                </div>
                <div className="categories">
                    <div className="container mx-auto my-32">
                        <div className="cont text-white ">
                            <div className="flex flex-col md:flex-row justify-between gap-2 px-20 py-16">
                            <div className="left w-full md:w-2/5 p-2">
                                <h3 className="text-3xl font-bold mb-5">WorkWave is totally free!</h3>
                                <p className="mb-10 font-bold">And finally, you don’t have to pay on additional services on WorkWave. Every user gets the full functionalities of WorkWave platform, which means that every user has the same chances, no pay for certification, no advertising services, and more.</p>
                                <Button text="Join us now" color='#fff' object={<FontAwesomeIcon icon={faArrowRight} style={{marginLeft: '8px'}} />} clicked border />
                            </div>
                            <div className="right">
                                <img src={require('../../../assets/freelogo.png')} alt="" />
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}