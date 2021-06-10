import React from 'react';
import Sidebar from './Sidebar';
import { Button } from 'react-bootstrap';

function Dashboard({ user, setUser }) {

    function handleLogout(){
        setUser("")
    }

    return (
        <div className="dashboard">
            <Sidebar user={user} />

            <br/>
            
            <Button variant="secondary" onClick={handleLogout}> Log Out </Button>
        </div>
    )
}

export default Dashboard;