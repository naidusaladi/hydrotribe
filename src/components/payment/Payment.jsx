import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import qrcode from '../../assets/qrcode.jpeg'
import pay from '../../assets/pay.jpeg'
// /internship/thanks
const Payment = ({handelRegestration,submitUser}) => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [paymentId, setPaymentId] = useState('');
  
  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handlePaymentIdChange = (e) => {
    setPaymentId(e.target.value);
    handelRegestration(e.target.name, e.target.value);
  };

  const handleSubmit =async (e) => {
    // Add your payment submission logic here
    e.preventDefault();
    console.log('Payment submitted with ID:', paymentId);
    await submitUser()
    navigate('/internship/thanks', { replace: true });
  };

  return (
    <div className="bg-green-500 min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4">Payment</h2>
        {step === 1 && (
          <div>
            <p className="mb-4 font-bold">Step 1: Scan the QR Code</p>
            {/* QR code scanning component */}
            <img src={qrcode} width={200}/>
            <button onClick={nextStep} className="py-2 px-4 bg-green-500 text-white rounded-md">
              Next
            </button>
          </div>
        )}
        {step === 2 && (
          <div>
            <p className="mb-4 font-bold">Step 2: Complete the Payment</p>
            <ul className="mb-4 flex flex-col gap-2">
              <li className='flex justify-between items-center border-b-2'><div>Front end development with reactjs</div> <div className='text-green-500'>₹650</div></li>
              <li className='flex justify-between items-center border-b-2'><div>Back end development with Python</div> <div className='text-green-500'>₹650</div></li>
              <li className='flex justify-between items-center border-b-2'><div>Machine Learing with Python</div> <div className='text-green-500'>₹650</div></li>
              <li className='flex justify-between items-center border-b-2'><div>IoT Node MCU, Arduino and Robotics</div> <div className='text-green-500'>₹750</div></li>
              <li className='flex justify-between items-center border-b-2'><div>Product Development and Rapid Prototyping/3D printing</div> <div className='text-green-500'>₹700</div></li>
              <li className='flex justify-between items-center border-b-2'><div>Landscape designing in 3D Modeling</div> <div className='text-green-500'>₹650</div></li>
              <li className='flex justify-between items-center border-b-2'><div>Terrace Gardening Design and Installations 3D Modeling</div> <div className='text-green-500'>₹1000</div></li>
              <li className='flex justify-between items-center border-b-2'><div>Structural Design & Analysis</div> <div className='text-green-500'>₹1000</div></li>
              <li className='flex justify-between items-center border-b-2'><div>Entrepreneurship and Innovation</div> <div className='text-green-500'>₹1000</div></li>
              <li className='flex justify-between items-center border-b-2'><div>Startup Management</div> <div className='text-green-500'>₹1000</div></li>
              <li className='flex justify-between items-center border-b-2'><div>Innovation Management</div> <div className='text-green-500'>₹1000</div></li>
              <li className='flex justify-between items-center border-b-2'><div>Digital Transformation</div> <div className='text-green-500'>₹600</div></li>
              <li className='flex justify-between items-center border-b-2'><div>Community Service Project</div> <div className='text-green-500'>₹250</div></li>

              
            </ul>
            <button onClick={prevStep} className="mr-4 py-2 px-4 bg-gray-300 text-black rounded-md">
              Previous
            </button>
            <button onClick={nextStep} className="py-2 px-4 bg-green-500 text-white rounded-md">
              Next
            </button>
          </div>
        )}
        {step === 3 && (
          <div>
            <p className="mb-4">Step 3: Enter Payment ID</p>
            <form onSubmit={handleSubmit}>
            <div className="mb-4">
              
                <label htmlFor="paymentId" className="block text-sm font-medium text-gray-700 mb-1">
                  Trasaction ID
                </label>
                <input
                  type="text"
                  id="paymentId"
                  name='paymentId'
                  value={paymentId}
                  onChange={handlePaymentIdChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  required
                />
              

            </div>
            <img src={pay} alt="Sample Payment" className="mb-4" width={200} />
            <button onClick={prevStep} className="mr-4 py-2 px-4 bg-gray-300 text-gray-700 rounded-md">
              Previous
            </button>
            
            <button type='submit' className="py-2 px-4 bg-green-500 text-white rounded-md">
              Submit
            </button>
            </form>

          </div>
        )}
      </div>
    </div>
  );
};

export default Payment;
