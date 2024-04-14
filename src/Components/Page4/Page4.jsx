// Page4.js
import React from 'react';
import { useLocation } from 'react-router-dom';

function Page4() {
  const location = useLocation();
  const formData = location.state;

  return (
    <div>
      <h1>Page 4 - Display Form Data</h1>
      <p>Full Name: {formData.fullName}</p>
      <p>Phone Number: {formData.phoneNumber}</p>
      {/* Display other form fields similarly */}
    </div>
  );
}

export default Page4;
