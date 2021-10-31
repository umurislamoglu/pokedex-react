import React from "react";
import AppRouter from './../router/AppRouter';
import { ToastContainer } from 'react-toastify';


const Dashboard = () => {
  return (
    <div className="dashboard" style={{minHeight:"100vh"}}>
<div className="" style={{minHeight:"100vh"}} > 
      <AppRouter/>
    </div>
    <ToastContainer
position="bottom-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
    </div>
    
  );
};

export default Dashboard;
