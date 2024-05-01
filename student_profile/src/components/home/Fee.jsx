// Fee.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Fee.css';
import Header from './Header';

function Fee() {
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
    <div className='Fee'>
      <div
        className={`accordion ${activeAccordion === 'Full_Time' ? 'active' : ''}`}
        onClick={() => toggleAccordion('Full_Time')}
      >
       FEE
      </div>
      <div
        id='Full_Time'
        className={`tabcontent ${activeAccordion === 'Full_Time' ? 'show' : ''}`}
      >
        <table>
        <thead>
            <tr>
                        <th>Particular</th>
                        <th>Fee</th>
                        <th>Applicable Fee</th>
             </tr>
             </thead>
             <tbody>
                {data.fee_details && data.fee_details.map((fee_details, index) => (
                  <tr key={index}>
                    <td>{fee_details.particular }</td>
                    <td>{fee_details.total_fee}</td>
                    <td>{fee_details.applicable_fee}</td>
                  </tr>
                ))}
              </tbody>
        </table>
      </div>
    </div>
    </>
  );
}

export default Fee;
