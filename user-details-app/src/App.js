import React from 'react';
import UserDetails from './UserDetails';

function App() {
  return (
    <div className="App">
      <UserDetails 
        name="Aswin" 
        age={23} 
        email="aswinaswin12@gmail.com" 
        mobileNo="9746901317" 
        city="Kollam" 
      />
    </div>
  );
}

export default App;
