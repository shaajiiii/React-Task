import React,{useState} from 'react';
import Main from '../components/ReusableComponent/Main';

function Home() {

  const [showScreenOne,setShowScreenOne ] = useState(true);
  const displayScreenOne = ()=>{
    setShowScreenOne(true);
  }
  const displayScreenTwo = ()=>{
    setShowScreenOne(false);
  }

  return (
    <>
        <Main showScreenOne={showScreenOne} 
        displayScreenOne = {displayScreenOne}
        displayScreenTwo = {displayScreenTwo}
        />
    </>
  )
}

export default Home
