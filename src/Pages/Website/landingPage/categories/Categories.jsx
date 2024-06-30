import React, { useEffect } from 'react';
import './Categories.scss';
import Header from '../../../../Components/header/Header';
import Footer from '../../../../Components/footer/Footer';

export default function Categories() {
    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
      }, []);
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
    const showSkill = domains.map((el,key) => 
        <div className='domain px-20 py-10 my-16 my-border global-radius' key={key}>
            <h3 className='text-xl font-bold mb-5'>{el}</h3>
            <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
                {allSkills[key].map((skill,key) => 
                    <li className='list-disc my-2 ' key={key}>{skill}</li>
                )}
            </ul>
        </div>
    )
    return (
        <>
            <Header />
            <div className="categorie-page">
                <div className="categories">
                    <div className="box mx-auto">
                        <div className="cont text-white pt-20">
                            <div className="w-3/5 mx-auto flex flex-col md:flex-row justify-between items-center gap-2 px-4 py-6 md:px-10 md:py-10 lg:px-20 lg:py-16">
                                <div className="left w-full mb-10 md:mb-0 text-center md:text-left">
                                    <h3 className="text-xl sm:text-3xl font-bold mb-5 w-full leading-snug">WorkWave Skill Categories</h3>
                                </div>
                                <div className="right">
                                    <img src={require('../../../../assets/LogoWhite.svg')} className="mx-auto md:ml-auto" style={{ width: '80%' }} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="domains container my-20">
                        {showSkill}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
