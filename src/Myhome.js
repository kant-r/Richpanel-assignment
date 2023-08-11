import React, { useState } from 'react';
import './Myhome.css'
function Myhome() {
    const [selectMonthly, setSelectMonthly] = useState(true);
  console.log(selectMonthly);
  const [mobile,setMobile] = useState(100);
  const [basic,setBasic] = useState(200);
  const [standard,setStandard] = useState(500);
  const [premium,setPremium] = useState(700);
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);
  const handleClick1 = () => {
    setIsActive1(current => !current);

  };
  const handleClick2 = () => {
    setIsActive2(current => !current);

  };
  const handleClick3 = () => {
    setIsActive3(current => !current);

  };
  const handleClick4 = () => {
    setIsActive4(current => !current);

  };
  
  // selectMonthly ? setMobile(100) : setMobile(1000);
  // selectMonthly ? setBasic(200) : setBasic(2000);
  // selectMonthly ? setStandard(500) : setStandard(5000);
  // selectMonthly ? setPremium(700) : setPremium(7000);
  return (
    <div className="PricingApp">
    <h1 className="header-topic">Choose the right plan for you</h1>
      <div className="app-container">
        {/* Header */}
        <div className='toggle'>
          <div className="header-row">
            <p>Annually</p>
            <label className="price-switch">
              <input
                className="price-checkbox"
                onChange={() => {
                  setSelectMonthly((prev) => !prev);
                }}
                type="checkbox"
              />
              <div className="switch-slider"></div>
            </label>
            <p>Monthly</p>
          </div>
        </div>
        <h5 className="heading" 
        style={{
          backgroundColor: isActive1 ? '#1e4c90' : '#7893bc'
        }}
        onClick={handleClick1}
        >Mobile</h5>
        <h5 className="heading"  style={{
          backgroundColor: isActive2 ? '#1e4c90' : '#7893bc'
        }}
        onClick={handleClick2}>Basic</h5>
        <h5 className="heading"  style={{
          backgroundColor: isActive3 ? '#1e4c90' : '#7893bc'
        }}
        onClick={handleClick3}>Standard</h5>
        <h5 className="heading"  style={{
          backgroundColor: isActive4 ? '#1e4c90' : '#7893bc'
        }}
        onClick={handleClick4}>Premium</h5>
        
      
        </div> 
        <div className='app-cont' style={{borderBottom: '1px solid #f2f3f2;'}}>
        <p className='row-details'>Monthly price</p>
            <p className='row-details'>₹ {selectMonthly ? "100" : "1000"}</p>
            <p className='row-details'>₹ {selectMonthly ? "200" : "2000"}</p>
            <p className='row-details'>₹ {selectMonthly ? "500" : "5000"}</p>
            <p className='row-details'>₹ {selectMonthly ? "700" : "7000"}</p>
        </div>
        <div className='app-cont' style={{borderBottom: '1px solid #f2f3f2;'}}>
        <p className='row-details'> Video quality</p>
            <p className='row-details'>Good</p>
            <p className='row-details'>Good</p>
            <p className='row-details'>Better</p>
            <p className='row-details'>Best</p>
        </div>
        <div className='app-cont' style={{borderBottom: '1px solid #f2f3f2;'}}>
        <p className='row-details'>Resolution</p>
            <p className='row-details'>480p</p>
            <p className='row-details'>480p</p>
            <p className='row-details'>1080p</p>
            <p className='row-details'>4K+HDR</p>
        </div>
        <div className='app-cont' style={{borderBottom: '1px solid #f2f3f2;'}}>
        <p className='row-details'>Devices you can use to watch</p>
            <p className='row-details'>Phone</p>
            <p className='row-details'>Phone</p>
            <p className='row-details'>Phone</p>
            <p className='row-details'>Phone</p>
        </div>
        <div className='app-cont'>
        <p className='row-details'></p>
            <p className='row-details'>Tablet</p>
            <p className='row-details'>Tablet</p>
            <p className='row-details'>Tablet</p>
            <p className='row-details'>Tablet</p>
        </div>
        <div className='app-cont'>
        <p className='row-details'></p>
            <p className='row-details'></p>
            <p className='row-details'>Computer</p>
            <p className='row-details'>Computer</p>
            <p className='row-details'>Computer</p>
        </div>
        <div className='app-cont'>
        <p className='row-details'></p>
            <p className='row-details'></p>
            <p className='row-details'>TV</p>
            <p className='row-details'>TV</p>
            <p className='row-details'>TV</p>
        </div>
        
        <button className='next-btn'>Next</button>
      </div>
  )
}

export default Myhome
