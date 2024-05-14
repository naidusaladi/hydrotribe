import React from 'react';
import {useParams} from "react-router-dom";
import { db } from '../../config/firebase'
import { useEffect ,useState} from 'react'
import { collection, getDoc,doc } from 'firebase/firestore'
const Student = () => {
  let  {userId}=useParams()
  const[validUser,setValidUser]=useState(true);
  const [user,setUser]=useState([])


  useEffect(()=>{
      
    const getUsers=async()=>{
        try{
            
            const data=await getDoc(doc(db,'internship2024',userId))
            const values=data.data()
            setUser(values)
            
            setValidUser(data.exists())

        }catch(err){
            console.error(err)
            
            
        }


        
    }

    getUsers()


},[])
  if (!validUser) {
    return <div className='h-[100vh] bg-red-300 flex items-center justify-center text-3xl'>Not a Valid User !!!</div>
  }
  return (
    
    <div className="bg-green-500 min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl">
        <h2 className="text-3xl font-bold mb-6 text-center">Student Details</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="col-span-1">
            <div className="bg-gray-100 rounded-md p-4">
              <p className="text-lg font-semibold mb-2">Registration ID</p>
              <p className="text-gray-800">{userId}</p>
            </div>
            <div className="bg-gray-100 rounded-md p-4 mt-4">
              <p className="text-lg font-semibold mb-2">Full Name</p>
              <p className="text-gray-800">{user.name}</p>
            </div>
          </div>
          <div className="col-span-1">
            <div className="bg-gray-100 rounded-md p-4">
              <p className="text-lg font-semibold mb-2">Course Registered</p>
              <p className="text-gray-800">{user.course}</p>
            </div>
            <div className="bg-gray-100 rounded-md p-4 mt-4">
              <p className="text-lg font-semibold mb-2">Payment Status</p>
              <p className="text-gray-800">{user.status}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Student;
