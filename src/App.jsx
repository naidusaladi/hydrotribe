import React,{useState} from 'react'
import Home from './pages/home/Home'
import StudentRegistration from './components/studentRegistration/StudentRegistration'
import Payment from './components/payment/Payment'
import Thanks from './components/thanks/Thanks'
import Login from './components/studentLogin/Login'
import Student from './components/student/Student'
import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  Link,
} from "react-router-dom";

import {v4} from 'uuid'
import { db } from '../src/config/firebase'
import {addDoc, collection,doc,setDoc} from 'firebase/firestore'
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  


  const [student,setStudent]=useState({
    fullName: '',
    branch: '',
    college: '',
    number: '',
    course: '',
    weeks: '',
    paymentId:'',
  })
  const [studentId,setStudentId]=useState('')

  const userCollectionRef=collection(db,"internship2024")

  const handelRegestration=(name,value)=>{
    setStudent((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    
  }
  const generateUniqueId = () => {
    const uuid = uuidv4(); // Generate UUID
    const id = uuid.slice(0, 4); // Get last 4 characters
    return id;
  };

  const submitUser=async ()=>{
    try{
        const id=`HYDRO2024${generateUniqueId()}`
        setStudentId(id)
        const docRef=doc(userCollectionRef,id)
        
        await setDoc(docRef,{name:student.fullName,branch:student.branch,college:student.college,number:student.number,course:student.course,weeks:student.weeks,paymentId:student.paymentId,status:"Not Verified"})

    }catch(err){
        console.error(err)
    }
    
}


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
{/*         <Route path='internship/register' element={<StudentRegistration handelRegestration={handelRegestration}/>}/> */}
        <Route path='internship/payment' element={<Payment handelRegestration={handelRegestration} submitUser={submitUser}/>}/>
        <Route path='internship/login' element={<Login/>}/>
        <Route path='internship/thanks' element={<Thanks studentId={studentId}/>}/>
        <Route path='internship/student/:userId' element={<Student />}/>
        <Route path='*' element={<div className='h-[100vh] bg-red-300 flex items-center justify-center text-3xl'>Page Not Found !!!</div>}/>
      </Routes>
    </BrowserRouter>

    {/* <Student studentInfo={studentInfo}/> */}
    
    


    </>
  )
}

export default App
