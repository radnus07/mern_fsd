// Placements.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Placements.css';
import Header from './Header';

function Placements() {
  const [activeAccordion, setActiveAccordion] = useState('');

  const toggleAccordion = (accordionId) => {
    if (activeAccordion === accordionId) {
      setActiveAccordion('');
    } else {
      setActiveAccordion(accordionId);
    }
  };

  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3000/student')
      .then(res => setData(res.data))
      .catch(err => console.log(err)); // Fix the catch statement
  }, []); 

  return (
    <><Header/>
    <div className='Placements'>
      <div
        className={`accordion ${activeAccordion === 'Full_Time' ? 'active' : ''}`}
        onClick={() => toggleAccordion('Full_Time')}
      >
        Full Time
      </div>
      <div
        id='Full_Time'
        className={`tabcontent ${activeAccordion === 'Full_Time' ? 'show' : ''}`}
      >
        <table>
        <thead>
            <tr>
                        <th>Company</th>
                        <th>CTC</th>
                        <th>Date of Joining</th>
             </tr>
             </thead>
             <tbody>
                {data.placement && data.placement.map((placement, index) => (
                  <tr key={index}>
                    <td>{placement.company }</td>
                    <td>{placement.ctc}</td>
                    <td>{placement.date_of_joining}</td>
                  </tr>
                ))}
              </tbody>
        </table>
      </div>

      <div
        className={`accordion ${activeAccordion === 'Internship' ? 'active' : ''}`}
        onClick={() => toggleAccordion('Internship')}
      >
        Internship
      </div>
      <div
        id='Internship'
        className={`tabcontent ${activeAccordion === 'Internship' ? 'show' : ''}`}
      >
        <table>
        <thead>
            <tr>
                        <th>Company</th>
                        <th>CTC</th>
                        <th>Date of Joining</th>
             </tr>
             </thead>
             <tbody>
                {data.internships && data.internships.map((internships, index) => (
                  <tr key={index}>
                    <td>{internships.company }</td>
                    <td>{internships.ctc}</td>
                    <td>{internships.date_of_joining}</td>
                  </tr>
                ))}
              </tbody>
        </table>
      </div>

      <div
        className={`accordion ${activeAccordion === 'Research' ? 'active' : ''}`}
        onClick={() => toggleAccordion('Research')}
      >
        Research
      </div>
      <div
        id='Transcript'
        className={`tabcontent ${activeAccordion === 'Research' ? 'show' : ''}`}
      >
        <table>
        <thead>
            <tr>
                        <th>Tag Name</th>
                        <th>Guide</th>
                        <th>Project</th>
             </tr>
             </thead>
             <tbody>
                {data.research && data.research.map((research, index) => (
                  <tr key={index}>
                    <td>{research.Tag_Name }</td>
                    <td>{research.Guide}</td>
                    <td>{research.project}</td>
                  </tr>
                ))}
              </tbody>
        </table>
      </div>
    </div>
    </>
  );
}

export default Placements;
