// import React from 'react';
// import { BrowserRouter, Route ,Routes } from 'react-router-dom';
// import './App.css';
// import "./Css/Style.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Login from './Components/Login';
// import Header from './Components/Header';


// function App() {
//   return (
//     <div className="App">
         
      
//       <BrowserRouter>

//        <Header/>

      

//       <Routes>
//         <Route exact path="/" element={<Login /> } />
        
        

//       </Routes>
      

      
//       </BrowserRouter>

      
       
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';
import './Css/Style.css';

function App() {
  const [slots, setSlots] = useState(Array(10).fill(false));
  const [selectedSlot, setSelectedSlot] = useState(null);

  const handleSlotClick = (index) => {
    if (!slots[index]) {
      setSelectedSlot(index);
    }
  };

  const handleConfirm = () => {
    const updatedSlots = [...slots];
    updatedSlots[selectedSlot] = true;
    setSlots(updatedSlots);
    setSelectedSlot(null);
  };

  const handleCancel = () => {
    setSelectedSlot(null);
  };

  return (
    <div className="App">
      <h1>Car Parking Slots</h1>
      <div className="parking-lot">
        {slots.map((slot, index) => (
          <div
            key={index}
            className={`slot ${slot ? 'occupied' : ''} ${
              selectedSlot === index ? 'selected' : ''
            }`}
            onClick={() => handleSlotClick(index)}
          >
            {index + 1}
          </div>
        ))}
      </div>
      {selectedSlot !== null && (
        <div className="actions">
          <button onClick={handleConfirm}>Park Car</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      )}
    </div>
  );
}

export default App;
