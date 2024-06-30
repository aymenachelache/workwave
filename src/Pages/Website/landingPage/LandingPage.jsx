import Button from "../../../Components/Button/Button";
import Footer from "../../../Components/footer/Footer";
import Header from "../../../Components/header/Header";
import './LandingPage.scss';
import { baseURL, primaryColor } from "../../../Components/Variables/Variables";
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
import categorie1hover from '../../../assets/categorie1-hover.png'
import categorie2hover from '../../../assets/categorie2-hover.png'
import categorie3hover from '../../../assets/categorie3-hover.png'
import categorie4hover from '../../../assets/categorie4-hover.png'
import categorie5hover from '../../../assets/categorie5-hover.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import axios from "axios";



export default function LandingPage() {


    function changeImage(e, num) {
        let url;
        switch (num) {
            case 1:
                url = categorie1hover;
                break;
            case 2:
                url = categorie2hover;
                break;
            case 3:
                url = categorie3hover;
                break;
            case 4:
                url = categorie4hover;
                break;
            case 5:
                url = categorie5hover;
                break;
            default:
                url = '';
                break;
        }
        e.target.children[0].src = require(url);
    }
    function changeImageHover(e, num) {
        let urll
        switch (num) {
            case 1:
                urll = categorie1;
                break;
            case 2:
                urll = categorie2;
                break;
            case 3:
                urll = categorie3;
                break;
            case 4:
                urll = categorie4;
                break;
            case 5:
                urll = categorie5;
                break;
            default:
                urll = '';
                break;
        }
        e.target.children[0].src = require(urll);
    }

   
    
    return (
        <>
            <Header />
            <div className="landing">
                <div className="hero hero-work">
                    <div className="container mx-auto pt-16 w-full h-screen flex flex-col justify-center">
                        <div className="text text-center md:text-left">
                            <h1 className="text-white font-extrabold text-3xl lg:text-4xl">Ride the WorkWave and Catch the Perfect <TextGradient text='Wave of Opportunities!' /></h1>
                            <p className="text-white mt-5 tracking-wider text-base">Unlock opportunities to earn reliable income, all while working from home.</p>
                        </div>
                        <div className="buttons mt-7 flex justify-center items-center md:justify-start flex-col md:flex-row gap-6">
                            <Button link='register' text='Find work opportunities' classes='font-bold text-base tracking-wide' padding='8px 30px' clicked={false} color={primaryColor} border />
                            <Button link='hire' text='I want to hire' color='#fff' classes='font-bold text-base tracking-wider' object={<FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '10px' }} />} clicked />
                        </div>
                    </div>
                </div>
                <div className="advantages advantages1">
                    <div className="container mx-auto">
                        <h2 className="text-center py-20"><TextGradient text='Why WorkWave?' size='30px' weight='800' /></h2>
                        <div className="boxes grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-x-3 md:gap-y-6">
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
                    <div className="container mx-auto mt-32 px-4 py-6 md:px-10 md:py-10 lg:px-20 lg:py-16 text-white flex flex-col lg:flex-row items-center justify-between gap-2">
                        <div className="left w-full lg:w-6/12 p-2 mb-10 lg:mb-0 text-center lg:text-left">
                            <h3 className="text-3xl font-bold mb-5 w-full lg:w-4/5">Many categories just to set you up!</h3>
                            <p className="mb-10">We offer all the categories and fields that are available on the freelance market, you can start working in the field that you are skilled in, in just few clicks.</p>
                            <Button link='/register' text="Join us" color='#fff' classes='font-bold text-xl border-3 btn-hover-white' padding='8px 20px' object={<FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '8px' }} />} clicked border />
                        </div>
                        <div className="right grid grid-cols-2 sm:grid-cols-3 gap-3">
                            <div className="box p-4 text-center cursor-pointer" onMouseEnter={e => changeImage(e, 1)} onMouseLeave={e => changeImageHover(e, 1)}>
                                <img src={require('../../../assets/categorie1.png')} alt="" className="mx-auto" />
                                <h5 className="mt-4">Design & creativity</h5>
                            </div>
                            <div className="box p-4 text-center cursor-pointer" onMouseEnter={e => changeImage(e, 2)} onMouseLeave={e => changeImageHover(e, 2)}>
                                <img src={require('../../../assets/categorie2.png')} alt="" className="mx-auto" />
                                <h5 className="mt-4">Multimedia</h5>
                            </div>
                            <div className="box p-4 text-center cursor-pointer" onMouseEnter={e => changeImage(e, 3)} onMouseLeave={e => changeImageHover(e, 3)}>
                                <img src={require('../../../assets/categorie3.png')} alt="" className="mx-auto" />
                                <h5 className="mt-4">Digital marketing</h5>
                            </div>
                            <div className="box p-4 text-center cursor-pointer" onMouseEnter={e => changeImage(e, 4)} onMouseLeave={e => changeImageHover(e, 4)}>
                                <img src={require('../../../assets/categorie4.png')} alt="" className="mx-auto" />
                                <h5 className="mt-4">Writing & translation</h5>
                            </div>
                            <div className="box p-4 text-center cursor-pointer" onMouseEnter={e => changeImage(e, 5)} onMouseLeave={e => changeImageHover(e, 5)}>
                                <img src={require('../../../assets/categorie5.png')} alt="" className="mx-auto" />
                                <h5 className="mt-4">Development</h5>
                            </div>
                            <div className="box p-4 text-center cursor-pointer flex justify-center items-center">
                                <Button link='/categories' text='View more' classes='' color='#f9f7f38a' object={<FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '8px' }} />} clicked />
                            </div>

                        </div>
                    </div>
                </div>
                <div className="advantages advantages2">
                    <div className="container mx-auto">
                        <h2 className="text-center py-20"><TextGradient text='How it works?' size='30px' weight='800' /></h2>
                        <div className="boxes grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
                            <LandingCard classes='box box1 flex flex-col text-center sm:text-left px-10 py-5' color='#37B778' background='#37B77826' title='Share an offer' desc='Share an offer of a service in our services marketplace, and wait for a client to hire you.'/>
                            <LandingCard classes='box box2 flex flex-col text-center sm:text-left px-10 py-5' color='#37B778' background='#37B77826' title='Make a deal' desc='The client tells you about what you wil do, so you use your skills and make his needs into reality, then you upload your work, so the client take it, once he approves it, you are good to go.' />
                            <LandingCard classes='box box3 flex flex-col text-center sm:text-left px-10 py-5' color='#37B778' background='#37B77826' title='Get paid' desc='Once the client approved your delivery, you will get paid, which means the money will be sent and added to your balance in WorkWave, so you can withdraw it with the method you want, by the payment method you desire.' />
                            <p className="col-span-full my-5">You don’t want to get through this process? Well, we made you another choice :</p>
                            <LandingCard classes='box box4 flex flex-col text-center sm:text-left px-10 py-5' color='#00AEEF' background='#00AEEF26' title='Choose a need' desc='Consult client needs and choose one you are capable of doing within the client terms, then apply for it.' />
                            <LandingCard classes='box box5 flex flex-col text-center sm:text-left px-10 py-5' color='#00AEEF' background='#00AEEF26' title='Make a deal' desc='Once you get chosen by the client, you start working on his project, when you finalize it, you upload it so the client can take it, when the client approves it, you are good to go.' />
                            <LandingCard classes='box box6 flex flex-col text-center sm:text-left px-10 py-5' color='#00AEEF' background='#00AEEF26' title='Get paid' desc='Once the client approved your delivery, you will get paid, which means the money will be sent and added to your balance in WorkWave, so you can withdraw it with the method you want, by the payment method you desire.' />

                        </div>
                    </div>
                </div>
                <div className="categories">
                    <div className="container mx-auto my-32">
                        <div className="cont text-white ">
                            <div className="flex flex-col md:flex-row justify-between items-center gap-2 px-4 py-6 md:px-10 md:py-10 lg:px-20 lg:py-16">
                                <div className="left w-full mb-10 md:mb-0 md:w-3/6 p-2 text-center md:text-left">
                                    <h3 className="text-3xl font-bold mb-5 w-full md:w-4/5">WorkWave is totally free!</h3>
                                    <p className="mb-10 font-bold">And finally, you don’t have to pay on additional services on WorkWave. Every user gets the full functionalities of WorkWave platform, which means that every user has the same chances, no pay for certification, no advertising services, and more.</p>
                                    <Button link='/register' text="Join us now" classes='font-bold text-xl border-3 btn-hover-white' color='#fff' object={<FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '8px' }} />} clicked border />
                                </div>
                                <div className="right">
                                    <img src={require('../../../assets/freelogo.png')} className="ml-auto" style={{ width: '80%' }} alt="" />
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