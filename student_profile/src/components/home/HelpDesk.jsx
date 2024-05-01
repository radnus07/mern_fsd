import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Helpdesk.css';
import Header from './Header';

function HelpDesk() {
  const [activeAccordion, setActiveAccordion] = useState('');
  const [helpdesk, setHelpdesk] = useState([]);
  const [faculty, setFaculty] = useState('');
  const [question, setQuestion] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/student')
      .then(res => {
        if (res.data && res.data.student && res.data.student.helpdesk) {
          setHelpdesk(res.data.student.helpdesk);
        }
      })
      .catch(err => console.log(err));
  }, []);

  const toggleAccordion = (accordionId) => {
    setActiveAccordion(activeAccordion === accordionId ? '' : accordionId);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = {
      faculty_name: faculty,
      question: question,
      reply: '' // reply will be empty initially
    };

    // Update the existing helpdesk array with the new entry
    setHelpdesk(prevHelpdesk => [...prevHelpdesk, newData]);

    // Update the JSON file with the new data
    axios.post('http://localhost:3000/student', { helpdesk: [...helpdesk, newData] })
      .then(res => console.log('New helpdesk item added:', newData))
      .catch(err => console.log(err));

    // Reset faculty and question inputs
    setFaculty('');
    setQuestion('');
  };

  return (
    <><Header/>
    <div className='HelpDesk'>
      <div
        className={`accordion ${activeAccordion === 'Submit_New' ? 'active' : ''}`}
        onClick={() => toggleAccordion('Submit_New')}
      >
        Submit New
      </div>
      <div
        id='Submit_New'
        className={`tabcontent ${activeAccordion === 'Submit_New' ? 'show' : ''}`}
      >
        <form onSubmit={handleSubmit}>
          <table>
            <tbody>
              <tr>
                <th>Faculty Name</th>
                <td><input type='text' placeholder='Faculty Name' value={faculty} onChange={e => setFaculty(e.target.value)} /></td>
              </tr>
              <tr>
                <th>Question</th>
                <td><input type='text' placeholder='Question' value={question} onChange={e => setQuestion(e.target.value)} /></td>
              </tr>
              <tr>
                <td colSpan='2'>
                  <button type='submit'>Submit</button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>

      <div
        className={`accordion ${activeAccordion === 'Grevience_Arised' ? 'active' : ''}`}
        onClick={() => toggleAccordion('Grevience_Arised')}
      >
        Grievance Arised
      </div>
      <div
        id='Grevience_Arised'
        className={`tabcontent ${activeAccordion === 'Grevience_Arised' ? 'show' : ''}`}
      >
        <table>
          <thead>
            <tr>
              <th>Faculty</th>
              <th>Question</th>
              <th>Reply</th>
            </tr>
          </thead>
          <tbody>
            {helpdesk.map((item, index) => (
              <tr key={index}>
                <td>{item.faculty_name}</td>
                <td>{item.question}</td>
                <td>{item.reply}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
}

export default HelpDesk;
