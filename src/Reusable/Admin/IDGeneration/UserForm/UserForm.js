//frontend/src/Reusable/IDGeneration/UserForm/UserForm.js
import React, { useState } from 'react';
import './UserForm.css'

const UserForm = ({ onAdd }) => {
  const [userType, setUserType] = useState('student');
  const [name, setName] = useState('');

  const handleSubmit = () => {
    if (!name.trim()) {
      alert('Please enter a valid name.');
      return;
    }

    onAdd(name, userType);
    setName('');
  };

  return (
    <div className='user-form-container'>
      <select className='user-form-container-select' onChange={(e) => setUserType(e.target.value)} value={userType}>
        <option value="student">Student</option>
        <option value="client">Client</option>
      </select>
      <input
        className='user-form-container-input'
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button className='user-form-container-button' onClick={handleSubmit}>Add</button>
    </div>
  );
};

export default UserForm;
