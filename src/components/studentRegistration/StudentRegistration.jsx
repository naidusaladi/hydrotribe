import React, { useState } from 'react';
import icon from '../../assets/hy.png';
import {useNavigate } from 'react-router-dom';

const StudentRegistrationPage = ({handelRegestration}) => {
  const navigate = useNavigate();
  const [formData,setFormData]=useState({
    fullName: '',
    branch: '',
    college: '',
    number: '',
    course: '',
    weeks: '',
  })



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    handelRegestration(name,value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
    navigate('/internship/payment', { replace: true });
  };

  return (
    <div className="bg-green-500 min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="flex justify-center mb-6">
          <img src={icon} alt="Company Logo" className="h-20 w-15" />
        </div>
        <h2 className="text-2xl font-bold mb-4">Student Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              required 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="branch" className="block text-sm font-medium text-gray-700 mb-1">
              Branch
            </label>
            <input
              type="text"
              id="branch"
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="college" className="block text-sm font-medium text-gray-700 mb-1">
              College
            </label>
            <input
              type="text"
              id="college"
              name="college"
              value={formData.college}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              required
            />
          </div>
        
          <div className="mb-4">
            <label htmlFor="number" className="block text-sm font-medium text-gray-700 mb-1">
              Whatsapp Number
            </label>
            <input
              type="number"
              id="number"
              name="number"
              value={formData.number}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1">
              Course
            </label>
            <select
              id="course"
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
            >
              <option value="">Select Course</option>
              <option value="frontend">Front End</option>
              <option value="backend">Back End</option>
              <option value="IoT">IoT</option>
              <option value="Machine Learning">Machine Learning</option>
              <option value="roduct Development and Rapid Pototyping">Product Development and Rapid Pototyping</option>
              <option value="Landscape designing in 3D">Landscape designing in 3D</option>
              <option value="Terrace Gardening Design and Installations">Terrace Gardening Design and Installations</option>
              <option value="Structural Design & Analysis">Structural Design & Analysis</option>
              <option value="Enterpreneurship and Innovation">Enterpreneurship and Innovation</option>
              <option value="Startup Management">Startup Management</option>
              <option value="Innovation Management">Innovation Management</option>
              <option value="Digital Transformation">Digital Transformation</option>
              <option value="Community Service Project">Community Service Project</option>
              
            
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="weeks" className="block text-sm font-medium text-gray-700 mb-1">
              Weeks
            </label>
            <select
              id="weeks"
              name="weeks"
              value={formData.weeks}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
            >
              <option value="">Select Weeks</option>
              <option value="6">6 Weeks</option>
              <option value="8">8 Weeks</option>
            </select>
          </div>
          
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Register
          </button>
         

        </form>
      </div>
    </div>
  );
};

export default StudentRegistrationPage;
