// Academics.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from './Header';
import './Academics.css';
import { useLocation } from 'react-router-dom';

function Academics() {
  const [activeAccordion, setActiveAccordion] = useState('');

  // const location = useLocation();
  // const userData = location.state.userData;

  // const [data, setData] = useState(userData);
 
  const toggleAccordion = (accordionId) => {
    if (activeAccordion === accordionId) {
      setActiveAccordion('studentDetails');
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

  return (<>
    <Header />
    <div className='Academics'>
      <div
        className={`accordion ${activeAccordion === 'studentDetails' ? 'active' : ''}`}
        onClick={() => toggleAccordion('studentDetails')}
      >
        Student Details
      </div>
      <div
        id='studentDetails'
        className={`tabcontent ${activeAccordion === 'studentDetails' ? 'show' : ''}`}
      >
        <table>
          <tbody>
          <tr>
                    <th>Name</th>
                    <td>{data.Name}</td>
                </tr>
                <tr>
                    <th>Roll Number</th>
                    <td>{data.roll_num}</td>
                </tr>
                <tr>
                    <th>Course</th>
                    <td>{data.course}</td>
                </tr>
                <tr>
                    <th>Branch</th>
                    <td>{data.branch}</td>
                </tr>
                <tr>
                    <th>Batch</th>
                    <td>{data.batch}</td>
                </tr>
                <tr>
                    <th>CGPA</th>
                    <td>{data.cgpa}</td>
                </tr>
          </tbody>
        </table>
      </div>

      <div
        className={`accordion ${activeAccordion === 'Sem_result' ? 'active' : ''}`}
        onClick={() => toggleAccordion('Sem_result')}
      >
        Exam Result
      </div>
      <div
        id='Sem_result'
        className={`tabcontent ${activeAccordion === 'Sem_result' ? 'show' : ''}`}
      >
        <table>
  <tbody>
    {data.examResults && data.examResults.map((examResult, index) => (
      <tr key={index}>
        <tr>
        <th>Sem {examResult.semNO}</th>
        </tr>
        <tr>
        <td>
          <table>
            <thead>
              <tr>
                <th>Course Code</th>
                <th>Course Name</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              {examResult.subjDetails && examResult.subjDetails.map((subjDetails, index) => (
                <tr key={index}>
                  <td>{subjDetails.coursecode}</td>
                  <td>{subjDetails.course_name}</td>
                  <td>{subjDetails.grade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </td>
        </tr>
        <tr>
        <td>SGPA : {examResult.SGPA}</td>
        </tr>
      </tr>
    ))}
  </tbody>
</table>
      </div>

      <div
        className={`accordion ${activeAccordion === 'Transcript' ? 'active' : ''}`}
        onClick={() => toggleAccordion('Transcript')}
      >
        Taranscript
      </div>
      <div
        id='Transcript'
        className={`tabcontent ${activeAccordion === 'Transcript' ? 'show' : ''}`}
      >
        <table>
        <thead>
            <tr>
                        <th>Course Code</th>
                        <th>Course Name</th>
                        <th>Credits</th>
             </tr>
             </thead>
             <tbody>
                {data.transcript && data.transcript.map((transcript, index) => (
                  <tr key={index}>
                    <td>{transcript.course_code }</td>
                    <td>{transcript.course_name}</td>
                    <td>{transcript.no_credits}</td>
                  </tr>
                ))}
              </tbody>
        </table>
      </div>


    </div>
    </>
  );
}

export default Academics;
