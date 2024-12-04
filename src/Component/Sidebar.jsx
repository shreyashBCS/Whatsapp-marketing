import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import logo2 from '../assets/logo2-removebg-preview.png'

const Sidebar = () => {
    return (
        <>
            <div className='bg-warning h-80 w-full'>
                <img
                    src={logo2}
                    alt='logo'
                    style={{ width: '170px', height: '50px', marginBottom: "0px", display: "block" }} // Adjust margin as needed
                />
            </div>

            <div style={{ backgroundColor: '#018B96', borderRadius: 4, width: "240px", height: "100vh", position: "fixed", top: 0, left: 0, zIndex: 1000, padding: 0, marginTop: "51px" }}>
                <div className="p-3" style={{ padding: 0, margin: 0 }}>
                    {/* <img src={logo} alt='logo'  style={{ width: '150px', height: '150px',marginTop:'0.1px' }} /> */}

                    <Nav defaultActiveKey="/home" className="flex-column">
                        <Nav.Link as={Link} to="/emailmanagement" className="text-white hover-white" style={{ marginTop: "0px" }}>Email Management </Nav.Link>
                        <Nav.Link as={Link} to="/slackmsg" className="text-white hover-white">Slack Message  </Nav.Link>
                        <Nav.Link as={Link} to="/whatsappcampaign" className="text-white hover-white">Whatsapp Campaign</Nav.Link>
                        <Nav.Link as={Link} to="/analytics&report" className="text-white hover-white">Analytics and Report </Nav.Link>
                    </Nav>
                </div>
            </div>
        </>
    );
};
export default Sidebar;
