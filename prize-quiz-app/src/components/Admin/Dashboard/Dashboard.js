import React, { useState, useEffect } from 'react';
import axios from '../../../axios';

import DataTable from './DataTable';

const Dashboard = (props) => {
    const [state, setState] = useState({ applications: [] });
    const [error, setError] = useState(false);

    useEffect(() => {
        axios
        .get('applications')
        .then(res => {
            setState({applications: res.data.rows});
            console.log(res);
        })
        .catch(error => {
            console.log(error);
        })
      }, []);

    return (
        <>
            <h4>View all prize quiz entries:</h4>
            <p>There are {state.applications.length} applications</p>
            <DataTable rows={state.applications} />
        </>
    )
}

export default Dashboard;