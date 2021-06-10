import React from 'react';
import Sidebar from './Sidebar';

function Dashboard({ id, setId }) {

    return (
        <div className="d-flex" style={{ height: '100vh' }}>
            <Sidebar id={id} />
        </div>
    )
}

export default Dashboard;