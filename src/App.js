import React from 'react';
import Cart from './Component/Heading';
import CustomNavbar from './Component/Navbar';
import CustomCard1 from './Component/Card1';
import CustomCard2 from './Component/Card2';
import CustomCard from './Component/Card';



function App() {
  return (
    <>    
    <div className="App">
      <Cart />
      <CustomNavbar />
      <CustomCard1 />
      <CustomCard2/>
      <CustomCard/>

    </div>
    </>
  );
}

export default App;
