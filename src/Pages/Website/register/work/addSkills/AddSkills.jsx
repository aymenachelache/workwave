import React, { useEffect, useState } from 'react';
import './AddSkills.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import BackButton from '../../../../../Components/backButton/BackButton';
import InputComp from '../../../../../Components/input/InputComp';
import TextGradient from '../../../../../Components/textGradient/TextGradient';
import Button from "../../../../../Components/Button/Button";
import { greyColor } from '../../../../../Components/Variables/VariablesColors';
import { motion } from 'framer-motion';

export default function AddSkills() {
    const [skills, setSkills] = useState([]);
    const domains = ['Writing & Translation', 'Design & Creativity', 'Multimedia', 'Development', 'Digital Marketing', 'Administrative Support', 'Consulting & Business', 'Engineering & Architecture'];
    const allSkills = [
        ['Article Writing', 'Blogging', 'Copywriting', 'Content Creation', 'Creative Writing', 'Proofreading', 'Technical Writing', 'Ghostwriting', 'Translation', 'Transcription', 'Localization', 'Subtitling', 'Interpretation', 'Academic Writing', 'Resume/CV Writing'],
        ['Logo Design', 'Branding', 'Illustration', 'Infographics', 'UI/UX Design', 'Print Design', 'Packaging Design', 'Digital Art', 'Creative Direction', 'Concept Art', 'Typography Design', 'Fashion Design'],
        ['Animation', 'Video Editing', 'Photography', 'Motion Graphics', 'Audio Editing', 'Music Production', 'Sound Design', 'Voiceover', 'Mixing and Mastering', 'Digital Art'],
        ['Web Development', 'Scripting', 'Data analytics', 'API Development', 'Mobile Development', 'Software Development', 'Game Development', 'Database Management', 'WordPress Development'],
        ['Search Engine Optimization (SEO)', 'Search Engine Marketing (SEM)', 'Social Media Management', 'Email Marketing', 'Affiliate Marketing', 'Content Marketing', 'PPC Advertising', 'Influencer Marketing'],
        ['Data Entry', 'Virtual Assistance', 'Customer Support', 'Email Management', 'Appointment Setting', 'Research Assistance'],
        ['Legal Consulting', 'HR Consulting', 'Management Consulting', 'Financial Consulting', 'Business Planning', 'Market Research', 'Business Analysis'],
        ['CAD Design', '3D Modeling', 'Interior Design'],

    ];
    const showDomains = domains.map((el, key) => <Link to={``} onClick={(e) => { showSkills(e) }} key={key} className={'domain w-fit block text-xs font-semibold text-nowrap primaryfont my-border global-radius px-2 py-1 my-2'}>{el}</Link>)
    const skillsDomain = skills.map((el, key) => <Link to={``} onClick={(e) => choseSkill(e)} key={key} className={'skill inline-block w-fit text-xs font-bold primaryfont my-border global-radius px-2 py-1 my-1 mr-1'}>{el}</Link>)
    function choseSkill(e) {
        e.target.classList.add('active');


    }
    function showSkills(e) {
        console.log(e.target.innerText);
        e.target.classList.add('active');
        switch (e.target.innerText) {
            case domains[0]:
                setSkills(allSkills[0]);
                break;
            case domains[1]:
                setSkills(allSkills[1]);
                break;
            case domains[2]:
                setSkills(allSkills[2]);
                break;
            case domains[3]:
                setSkills(allSkills[3]);
                break;
            case domains[4]:
                setSkills(allSkills[4]);
                break;
            case domains[5]:
                setSkills(allSkills[5]);
                break;
            case domains[6]:
                setSkills(allSkills[6]);
                break;
            case domains[7]:
                setSkills(allSkills[7]);
                break;
            default:
                break;
        }
    }
    useEffect(() => {
    }, []);
    return (
        <>
            <motion.div
                initial={{
                    opacity: 0,
                    // if odd index card,slide from right instead of left
                    x: -50
                }}
                whileInView={{
                    opacity: 1,
                    x: 0, // Slide in to its original position
                    transition: {
                        duration: 1 // Animation duration
                    }
                }}
                viewport={{ once: true }}
                className="create-account-work add-skills w-full relative">
                <div className="contain payment-methode w-3/4 mx-auto text-center">
                    <TextGradient size='25px' weight='800' text='Setting up your profile' />
                    <motion.p
                        initial={{
                            opacity: 0,
                            // if odd index card,slide from right instead of left
                            x: 100
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0, // Slide in to its original position
                            transition: {
                                duration: 1 // Animation duration
                            }
                        }}
                        className='text-sm text-[#777775] mb-10'>Choose your skills.</motion.p>

                    <div className="flex justify-between gap-4">
                        <div className="domains flex-1 text-left">
                            {showDomains}
                        </div>
                        <div className="skills grow text-left">
                            {skillsDomain}
                        </div>
                    </div>

                    <Link to={'addcertificate'} className={'btn-gradient block w-3/4 mx-auto mt-5 capitalize'} ><span className='text-lg font-extrabold primaryfont block'>Continue</span></Link>
                </div>
            </motion.div >
        </>
    )
}
