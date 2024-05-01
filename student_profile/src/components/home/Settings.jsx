import React, { useState } from 'react';
import Header from './Header';

function Settings() {
  const [activeAccordion, setActiveAccordion] = useState('');
  const toggleAccordion = (accordionId) => {
    setActiveAccordion(activeAccordion === accordionId ? '' : accordionId);
  };

 
  return (
    <><Header/>
    <div className='HelpDesk'>
      <div
        className={`accordion ${activeAccordion === 'Submit_New' ? 'active' : ''}`}
        onClick={() => toggleAccordion('Submit_New')}
      >
        Change password
      </div>
      <div
        id='Submit_New'
        className={`tabcontent ${activeAccordion === 'Submit_New' ? 'show' : ''}`}
      >
        <form>
          <table>
            <tbody>
              <tr>
                <th>Current Password</th>
                <td><input type='text' placeholder='Current Password'/></td>
              </tr>
              <tr>
                <th>New Password</th>
                <td><input type='text' placeholder='New Password' /></td>
              </tr>
              <tr>
                <th>Confirm Password</th>
                <td><input type='text' placeholder='Confirm Password' /></td>
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
    </div>
    </>
  );
}

export default Settings;
