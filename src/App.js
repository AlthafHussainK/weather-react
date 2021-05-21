import React from 'react'
const api = {
  key: "f5e3ef59f23f9575245a1a5fb3d7c9ec",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  return (
    <div className="app">
     <main>
       <div className="search-box">
         <input 
          type="text"
          className="search-bar"
          placeholder="Search.."
          />
       </div>
     </main>
    </div>
  );
}

export default App;
