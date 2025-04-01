import './Student_auth.css'
import Studentregister from '../Student_register/Student_register';
import StudentLogin from '../Student_login/Student_login';
import React, { useState } from 'react';

const StudentAuth = () => {
    const [isRegistered, setIsRegistered] = useState(false);

    return (
        <div className="studentauth-main-container">
            <div className="studentauth-main-container">
                {isRegistered ? (
                    <StudentLogin />
                ) : (
                    <Studentregister onRegisterSuccess={() => setIsRegistered(true)} />
                )}
            </div>
        </div>
    );
}

export default StudentAuth ;