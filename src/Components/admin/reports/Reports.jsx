import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { baseURL } from '../../Variables/Variables';
import Header from '../../header/Header';

const Reports = () => {

    const [reports, setReports] = useState([])
    useEffect(() => {

        const getReports = async (e) => {
            try {
                const response = await axios.get(`${baseURL}/api/enquiry/all`, {
                    withCredentials: true,
                });
                setReports(response.data.data);
                console.log(response.data);
            } catch (error) {
                console.error("Error:", error);
            }
        };
        // console.log(projects)
        getReports();
    }, []);
  return (
    <>
        <Header />
        {reports.map((report, index) => {
            return <div key={index}> {report.message} </div>
        })}
    </>
  )
}

export default Reports
