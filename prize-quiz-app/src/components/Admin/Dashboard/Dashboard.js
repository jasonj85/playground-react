import React, { useState } from 'react';
import axios from '../../../axios';

const Dashboard = () => {
    const [state, setState] = useState({ applications: [] });
    const [error, setError] = useState(false);

    const getApplications = () => {
        axios
            .get('applications')
            .then(res => {
                setState({applications: res.data.rows});
                console.log(res);
            })
            .catch(error => {
                console.log(error);
            })
    }

    try {
        getApplications();
    } catch (error) {
        setError(true);
        console.log(error);
    }

    return (
        <React.Fragment>
            <button onClick={getApplications}>Refresh applications</button>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Answer</th>
                    </tr>
                </thead>
                <tbody>
                    {state.applications.map(app => {
                        console.log(app);
                        return (
                            <tr key={app.id}>
                                <td>{app.name}</td>
                                <td>{app.email}</td>
                                <td>{app.answer}</td>
                            </tr>
                        );
                    })
                    }
                </tbody>
            </table>
        </React.Fragment>
    )
}

export default Dashboard;