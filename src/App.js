import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <div className="flex h-screen">

        <Sidebar />

        <div className="flex-1 flex flex-col">

          <TopBar />

          <div className="p-8 overflow-y-auto flex-1">
            <Routes>
              
              <Route path="/" element={<Dashboard />} />

            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}




export default App;
