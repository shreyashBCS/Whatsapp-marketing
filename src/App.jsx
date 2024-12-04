import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Component/Sidebar';
import EmailMgmt from './Component/EmailMgmt';
import SlackMsg from './Component/SlackMsg'
import Whatsapp from './Component/Whatsapp'
import Ar from './Component/Ar'

function App() {
  return (
    <Router>
      <Sidebar />
      <div style={{ marginLeft: '290px' }}> {/* Adjust margin based on sidebar width */}
        <Routes>
          <Route path="/" element={<Sidebar />} />
          <Route path='/emailmanagement' element={<EmailMgmt />} />
          <Route path='/slackmsg' element={<SlackMsg />} />
          <Route path='/whatsappcampaign' element={<Whatsapp />} />
          <Route path='/analytics&report' element={<Ar />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;