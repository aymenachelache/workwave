import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import TextGradient from '../../../../../Components/textGradient/TextGradient';
import './AddSkills.scss';

export default function AddSkills() {
    // State to track active domain and selected skills
    const [skills, setSkills] = useState([]);
    const [activeDomain, setActiveDomain] = useState(null);
    const [selectedSkills, setSelectedSkills] = useState([]);
    const navigate = useNavigate();
    const [error, setError] = useState(false);


    const domains = [
        'Writing & Translation',
        'Design & Creativity',
        'Multimedia',
        'Development',
        'Digital Marketing',
        'Administrative Support',
        'Consulting & Business',
        'Engineering & Architecture'
    ];

    const allSkills = [
        ['Article Writing', 'Blogging', 'Copywriting', 'Content Creation', 'Creative Writing', 'Proofreading', 'Technical Writing', 'Ghostwriting', 'Translation', 'Transcription', 'Localization', 'Subtitling', 'Interpretation', 'Academic Writing', 'Resume/CV Writing'],
        ['Logo Design', 'Branding', 'Illustration', 'Infographics', 'UI/UX Design', 'Print Design', 'Packaging Design', 'Digital Art', 'Creative Direction', 'Concept Art', 'Typography Design', 'Fashion Design'],
        ['Animation', 'Video Editing', 'Photography', 'Motion Graphics', 'Audio Editing', 'Music Production', 'Sound Design', 'Voiceover', 'Mixing and Mastering', 'Digital Art'],
        ['Web Development', 'Scripting', 'Data Analytics', 'API Development', 'Mobile Development', 'Software Development', 'Game Development', 'Database Management', 'WordPress Development'],
        ['Search Engine Optimization (SEO)', 'Search Engine Marketing (SEM)', 'Social Media Management', 'Email Marketing', 'Affiliate Marketing', 'Content Marketing', 'PPC Advertising', 'Influencer Marketing'],
        ['Data Entry', 'Virtual Assistance', 'Customer Support', 'Email Management', 'Appointment Setting', 'Research Assistance'],
        ['Legal Consulting', 'HR Consulting', 'Management Consulting', 'Financial Consulting', 'Business Planning', 'Market Research', 'Business Analysis'],
        ['CAD Design', '3D Modeling', 'Interior Design']
    ];

    const handleDomainClick = (e) => {
        const domainName = e.target.innerText;
        setActiveDomain(domainName);

        const domainIndex = domains.indexOf(domainName);
        if (domainIndex >= 0) {
            setSkills(allSkills[domainIndex]);
            // Reset selected skills when changing domain
            setSelectedSkills([]);
        }
    };

    const handleSkillClick = (skill) => {
        if (selectedSkills.includes(skill)) {
            // Deselect skill
            setSelectedSkills(selectedSkills.filter((s) => s !== skill));
        } else if (selectedSkills.length < 3) {
            // Select skill
            setSelectedSkills([...selectedSkills, skill]);
        }
    };

    const showDomains = domains.map((domain, key) => (
        <Link
            to={``}
            onClick={handleDomainClick}
            key={key}
            className={`domain w-fit block text-xs font-semibold text-nowrap primaryfont my-border global-radius px-2 py-1 my-2 ${
                activeDomain === domain ? 'active' : ''
            }`}
        >
            {domain}
        </Link>
    ));

  

    const skillsDomain = skills.map((skill, key) => (
        <Link
            to={``}
            onClick={() => handleSkillClick(skill)}
            key={key}
            className={`skill inline-block w-fit text-xs font-bold primaryfont my-border global-radius px-2 py-1 my-1 mr-1 ${
                selectedSkills.includes(skill) ? 'active' : ''
            }`}
        >
            {skill}
        </Link>
    ));


    const checkSkillsNumber = () => {
        if(selectedSkills.length === 3) {
            navigate("addcertificate");
        } else {
            setError(true);
        }
    };

    return (
        <>
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
                viewport={{ once: true }}
                className="create-account-work add-skills w-full relative"
            >
                <div className="contain payment-method w-3/4 mx-auto text-center">
                    <TextGradient size="25px" weight="800" text="Setting up your profile" />
                    <motion.p
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
                        className="text-sm text-[#777775] mb-10"
                    >
                        Choose your skills.
                    </motion.p>

                    <div className="flex justify-between gap-4">
                        <div className="domains flex-1 text-left">{showDomains}</div>
                        <div className="skills grow text-left">{skillsDomain}</div>
                    </div>
                    {error && (
                                <motion.div
                                    key="confirm-password-error" // Unique key for AnimatePresence
                                    initial={{ opacity: 0, y: -10 }} // Initial hidden state
                                    animate={{ opacity: 1, y: 0 }}   // Animation to visible
                                    exit={{ opacity: 0, y: -10 }}    // Animation when removed
                                    transition={{ duration: 0.5 }}  // Duration
                                    className="error-text text-sm text-[red]">Please select 3 skills.</motion.div>
                            )}
                    <button
                        onClick={checkSkillsNumber}
                        className="btn-gradient block w-3/4 mx-auto mt-5 capitalize"
                    >
                        <span className='text-lg font-extrabold primaryfont block'>Continue</span>
                    </button>
                </div>
            </motion.div>
        </>
    );
}
