import React, { useState } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

function PDF() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number,setnumber] = useState('');

  const handleInputChange = (event) => {
    setName(event.target.value);
    setEmail(event.target.value);
    setnumber(event.target.value);
  }

  const handleDownload = () => {
    const doc = new jsPDF();
    doc.autoTable({ html: '#my-table' });
    doc.save('my-document.pdf');
  }

  return (
    <div>
      <input type="text" value={name} onChange={handleInputChange} />
      <input type="email" value={email} onChange={handleInputChange} />
      <input type="number" value={number} onChange={handleInputChange} />
     
      <button onClick={handleDownload}>Download PDF</button>
      <table id="my-table">
        <thead>
          <tr>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{name}</td>
          </tr>
          <tr>
            <td>{email}</td>
          </tr>
          <tr>
            <td>{number}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default PDF;
