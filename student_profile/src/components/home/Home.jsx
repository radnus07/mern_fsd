// Home.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Home.css';
import Header from './Header';
import { useLocation } from 'react-router-dom';

function Home() {
  const location = useLocation();
  const userData = location.state.userData;

  const [data, setData] = useState(userData);

  const [activeAccordion, setActiveAccordion] = useState('');

  const toggleAccordion = (accordionId) => {
    if (activeAccordion === accordionId) {
      setActiveAccordion('');
    } else {
      setActiveAccordion(accordionId);
    }
  };

  // const [data, setData] = useState([])
  // useEffect(() => {
  //   axios.get('http://localhost:3000/student')
  //     .then(res => setData(res.data))
  //     .catch(err => console.log(err)); // Fix the catch statement
  // }, []); 

  return (
    <>
    <Header />
    <div className='Profile'>
      <div className='profilecontent1'>
        <table>
          <tr>
            <th>
              {data.Name}
            </th>
          </tr>
          <tr>
            <th>
            {data.rno}
            </th>
          </tr>
        </table>
        <table>
          <tbody>
            <tr>
              <td>DOB</td>
              <td>{data.DOB}</td>
            </tr>
            <tr>
              <td>email</td>
              <td>{data.email}</td>
            </tr>
            <tr>
              <td>Course</td>
              <td>{data.course}</td>
            </tr>
            <tr>
              <td>Branch</td>
              <td>{data.branch}</td>
            </tr>
            <tr>
              <td>Batch</td>
              <td>{data.batch}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='profilecontent2'>
      <div id="profilepage2">
          <table>
            <tbody>
              <tr>
                <td><center></center></td>
              </tr>
              <tr>
                <td>{data.Name}</td>
              </tr>
              <tr>
                <td>{data.roll_num}</td>
              </tr>
            </tbody>
          </table>
        </div>
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
                <td>CSE</td>
              </tr>
              <tr>
                <th>Batch</th>
                <td>2023-25</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div
          className={`accordion ${activeAccordion === 'Qualification' ? 'active' : ''}`}
          onClick={() => toggleAccordion('Qualification')}
        >
          Qualification
        </div>
        <div
          id='Qualification'
          className={`tabcontent ${activeAccordion === 'Qualification' ? 'show' : ''}`}
        >
          <table>
            <thead>
            <tr>
                        <th>Board</th>
                        <th>Qualification</th>
                        <th>Roll Number</th>
                        <th>Stream</th>
                        <th>CGPA / Percentage</th>
             </tr>
             </thead>
             <tbody>
                {data.qualification && data.qualification.map((qualification, index) => (
                  <tr key={index}>
                    <td>{qualification.board || qualification.university}</td>
                    <td>{qualification.qual}</td>
                    <td>{qualification.roll_no}</td>
                    <td>{qualification.stream || qualification.major}</td>
                    <td>{qualification.cgpa_percent || qualification.cgpa}</td>
                  </tr>
                ))}
</tbody>

          </table>
        </div>
        <div
          className={`accordion ${activeAccordion === 'Guardian_Details' ? 'active' : ''}`}
          onClick={() => toggleAccordion('Guardian_Details')}
        >
          Guardian Details
        </div>
        <div
          id='Guardian_Details'
          className={`tabcontent ${activeAccordion === 'Guardian_Details' ? 'show' : ''}`}
        >
          <div id='full'>
            <table>
              <tbody>
                <tr>
                  <th><center>Fathers Details</center></th>
                  <th><center>Mothers Details</center></th>
                </tr>
                <tr>
                  <td>
                    <table>
                      <tbody>
                        <tr>
                          <th>Fathers Name</th>
                          <td>{data.father && data.father.name}</td>
                        </tr>
                        <tr>
                          <th>Occupation</th>
                          <td>{data.father && data.father.occupation}</td>
                        </tr>
                        <tr>
                          <th>Contact Number</th>
                          <td>{data.father && data.father.phone}</td>
                        </tr>
                        <tr>
                          <th>E-Mail</th>
                          <td>{data.father && data.father.email}</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td>
                    <table>
                      <tbody>
                        <tr>
                          <th>Mothers Name</th>
                          <td>{data.mother && data.mother.name}</td>
                        </tr>
                        <tr>
                          <th>Occupation</th>
                          <td>{data.mother && data.mother.occupation}</td>
                        </tr>
                        <tr>
                          <th>Contact Number</th>
                          <td>{data.mother && data.mother.phone}</td>
                        </tr>
                        <tr>
                          <th>E-Mail</th>
                          <td>{data.mother && data.mother.email}</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            </div>
            <div id='mini'>
              <table>
                <tr>
                  <th>Fathers Details</th>
                </tr>
                <tr>
                  <table>
                  <tbody>
                        <tr>
                          <th>Fathers Name</th>
                          <td>{data.father && data.father.name}</td>
                        </tr>
                        <tr>
                          <th>Occupation</th>
                          <td>{data.father && data.father.occupation}</td>
                        </tr>
                        <tr>
                          <th>Contact Number</th>
                          <td>{data.father && data.father.phone}</td>
                        </tr>
                        <tr>
                          <th>E-Mail</th>
                          <td>{data.father && data.father.email}</td>
                        </tr>
                      </tbody>
                  </table>
                </tr>
                <tr>
                  <th>Mothers Details</th>
                </tr>
                <tr>
                  <table>
                  <tbody>
                        <tr>
                          <th>Mothers Name</th>
                          <td>{data.mother && data.mother.name}</td>
                        </tr>
                        <tr>
                          <th>Occupation</th>
                          <td>{data.mother && data.mother.occupation}</td>
                        </tr>
                        <tr>
                          <th>Contact Number</th>
                          <td>{data.mother && data.mother.phone}</td>
                        </tr>
                        <tr>
                          <th>E-Mail</th>
                          <td>{data.mother && data.mother.email}</td>
                        </tr>
                      </tbody>
                  </table>
                </tr>
              </table>
            </div>
        </div>

        <div
          className={`accordion ${activeAccordion === 'Bank_Details' ? 'active' : ''}`}
          onClick={() => toggleAccordion('Bank_Details')}
        >
          Bank Details
        </div>
        <div
          id='Bank_Details'
          className={`tabcontent ${activeAccordion === 'Bank_Details' ? 'show' : ''}`}
        >
          <table>
            <tbody>
            <tr>
                        <th>Name</th>
                        <td>{data.bankDetails && data.bankDetails.account_holder}</td>
                    </tr>
                    <tr>
                        <th>AC Number</th>
                        <td>{data.bankDetails && data.bankDetails.ac_number}</td>
                    </tr>
                    <tr>
                        <th>IFCS</th>
                        <td>{data.bankDetails && data.bankDetails.ifsc}</td>
                    </tr>
                    <tr>
                        <th>Bank</th>
                        <td>{data.bankDetails && data.bankDetails.bank}</td>
                    </tr>
                    <tr>
                        <th>Branch</th>
                        <td>{data.bankDetails && data.bankDetails.branch}</td>
                    </tr>
            </tbody>
          </table>
        </div>


      </div>
    </div>
    </>
  );
}



export default Home;
