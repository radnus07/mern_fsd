// Feedback.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './FeedBack.css';
import Header from './Header';

function Feedback() {

  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3000/student')
      .then(res => setData(res.data))
      .catch(err => console.log(err)); // Fix the catch statement
  }, []); 


  return (
    <><Header/>
      <table id='feedback'>
        <thead>
            <tr>
                        <th>Faculty Name</th>
                        <th>Comment</th>
                        
             </tr>
             </thead>
             <tbody>
                {data.feedback && data.feedback.map((feedback, index) => (
                  <tr key={index}>
                    <th>{feedback.faculty_name}</th>
                    <td>{feedback.comment}</td>
                  </tr>
                ))}
              </tbody>
        </table>
    </>
  );
}

export default Feedback;
