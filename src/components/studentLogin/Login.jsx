import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = ({ handleLogin }) => {
  const [registrationId, setRegistrationId] = useState('');

  const handleRegistrationIdChange = (e) => {
    setRegistrationId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    handleLogin(registrationId);
  };

  return (
    <div className="bg-green-500 min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="registrationId" className="block text-sm font-medium text-gray-700 mb-1">
              Registration ID
            </label>
            <input
              type="text"
              id="registrationId"
              value={registrationId}
              onChange={handleRegistrationIdChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
            />
          </div>
          <Link to={`/internship/student/${registrationId}`}>
          <button type="submit" className="w-full py-2 px-4 bg-green-500 text-white rounded-md">
            Login
          </button>
          </Link>

        </form>
      </div>
    </div>
  );
};

export default Login;
