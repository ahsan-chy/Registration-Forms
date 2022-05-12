import React from 'react';
import Navbar from './components/Navbar';
import Registration from "./components/Patient Registration";
// import Registration_Form from './components/Registration_Form';

function App() {
  return (
    <>
      <Navbar title="Logo" aboutTitle="About Us"/>
      <Registration />
      {/* <Registration_Form /> */}
    </>
  )
}

export default App