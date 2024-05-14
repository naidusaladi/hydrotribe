import React from 'react';
import { Link } from 'react-router-dom';

const Thanks = ({studentId}) => {
  // Generate a random registration ID (replace this with your actual logic)
  const registrationId = Math.floor(Math.random() * 1000000);

  return (
    <div className="bg-green-500 min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
        <p className="mb-4">Your registration ID is: {studentId}</p>
        <p className="mb-4">Click below to login:</p>
        <Link to="/internship/login" className="py-2 px-4 bg-green-500 text-white rounded-md inline-block">
          Login
        </Link>
       
      </div>
    </div>
  );
};

export default Thanks;
