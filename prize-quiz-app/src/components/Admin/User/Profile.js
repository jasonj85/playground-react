import React, { useState, useEffect } from "react";
import AuthService from "../../../services/auth.service";
import ApplicationService from "../../../services/application.service";

const Profile = () => {
    const [currentUser, setCurrentUser] = useState(undefined);
    const [userApplications, setUserApplications] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const user = AuthService.getCurrentUser();

        if (user) {
            setCurrentUser(user);
            ApplicationService.getUserApplications(user.email)
                .then(apps => {
                    setUserApplications(apps);
                    console.log(user);
                    console.log(apps);
                    setLoading(false);
                })
        }
    }, []);

    return (
        <>
            { loading ? (<p>loading...</p>)
                : (
                    <div className="container" >
                        <header className="jumbotron">
                            <h3><strong>{currentUser.username}</strong> Profile</h3>
                        </header>
                        <p>
                            <strong>Id:</strong> {currentUser.id}
                        </p>
                        <p>
                            <strong>Email:</strong> {currentUser.email}
                        </p>
                        <p>
                            <strong>Previous entry answers:</strong>
                        </p>
                        <ul>
                            {userApplications.data.map(app => {
                                return (<li key={app.id}>{app.answer}</li>)
                            }
                                
                            )}
                        </ul>

                    </div >

                )}
        </>
    );
};

export default Profile;