import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Topbar from './Components/Topnavbar/topnavbar';
import Sidebar from './Components/Sidenavbar/Sidenavbar';
import Home from './Components/Home/home.js';
import SubmitForm from './Components/SubmitForm/Submitform.js';
import Footer from './Components/Footer/footer.js';
import Services from './Components/Services/Webdevelopment/Webdevelopment.js'
import Learn from './Components/Services/Learn/learn.js';
import APIdevelopment from './Components/Services/APIdevelopment/apidevelopment.js';
import MaintenanceSupport from './Components/Services/MaintenanceSupport/maintenancesupport.js';
import ConnectUs from './Components/Contact/contact.js';
import ClintRegister from "./Reusable/Clint/Clint_register/clint_register.js";
import AdminLogin from './Reusable/Admin/Admin_login/admin-login.js';
import ClintLogin from './Reusable/Clint/Clint_login/clint_login.js';
import ClintForgetPassword from './Reusable/Clint/Clint_forget_password/clint_forget_password.js';
import ClintResetPassword from './Reusable/Clint/Reset_password/Reset_password.js';
import Clientdashboard from './Reusable/Clint/Client_dashboard/client_dashboard.js';
import Admindashboard from './Reusable/Admin/Admin_dashboard/admin_dashboard.js';
import Adminreportsclient from './Reusable/Admin/Admin_reports-client/Admin_reports-client.js';
import StudentAuth from './Reusable/Student/Student_auth/Student_auth.js';
import IDGeneration from './Reusable/Admin/IDGeneration/IDGeneration.js';
import StudentLogin from './Reusable/Student/Student_login/Student_login.js';
import Student_reports from './Reusable/Student/Sudent_reports/Sudent_reports.js';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Topbar /> */}
        <Sidebar />
        {/* Define your routes here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/submitform' element={<SubmitForm/>}/>
          <Route path='/services/web-development' element={<Services/>}/>
          <Route path='/services/learn' element={<Learn/>}/>
          <Route path='/services/api-development' element={<APIdevelopment/>}/>
          <Route path='/services/maintenance-support' element={<MaintenanceSupport/>}/>
          <Route path='/Contact' element={<ConnectUs/>}/>
          <Route path='/user-clint-register' element={<ClintRegister/>}/>
          <Route path='/user-clint-login' element={<ClintLogin/>}/>
          <Route path='/user-admin' element={<AdminLogin/>}/>
          <Route path='/user-clintforgetpassword' element={<ClintForgetPassword/>}/>
          <Route path='/user-ClintResetPassword:token' element={<ClintResetPassword/>}/>
          <Route path='/client-dashboard' element={<Clientdashboard/>}/>
          <Route path='/admin-dashboard' element={<Admindashboard/>}/>
          <Route path='/admin-client-reports' element={<Adminreportsclient/>}/>
          <Route path='/student-auth' element={<StudentAuth/>}/>
          <Route path='/id-Generation' element={<IDGeneration/>}/>
          <Route path='/student-login' element={<StudentLogin/>}/>
          <Route path='/student_reports' element={<Student_reports/>}/>
          {/* Add other routes as necessary */}
        </Routes>
        {/* <Footer/> */}
      </div>
    </Router>
  );
}

export default App;
