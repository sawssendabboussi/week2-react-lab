import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'                   

const courseTitle='Advanced Web Development'

function App (){
  const studentName='Sawssen Dabboussi'

  const student={
    name:'Sawssen',
    age: 20,
    track:'Business'
  }

  function sayHello(){
  return `Hello ${studentName}`
}

  return (
    <div>
      <h1>Hello everyone💕</h1>
      <p>My name is {studentName}</p>
      <p>Course: {courseTitle}</p>
      <p>Welcome to {courseTitle}, {studentName}!</p>
      <label htmlFor="search">search for a course: </label>
      <input type="text" className='search'/>
      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
      <p>Track: {student.track}</p>
      {/* 🔍 Debug Moment
      <p>{student}</p> */}
      <p>{sayHello()}</p>
    </div>
  )
}

export default App;

// Reflection Questions:
// 1)One thing I understand well in this lab: How to display variables and object properties in JSX using {}
// 2️)One thing that is still confusing: The difference between passing a function as reference {sayHello} vs executing it {sayHello()}
// 3️)One mistake I made and fixed: Using single quotes instead of backticks for template literals in sayHello()


