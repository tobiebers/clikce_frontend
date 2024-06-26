import { useRouter } from 'next/router';
import React from 'react';
import { useAuth } from "@/components/out-app/static-components/AuthContext";

const VerticalNavigation = () => {
  const router = useRouter();
  const { logout } = useAuth();

  const navigate = (path) => {
    router.push(path);
  };

  const handleLogout = () => {
    logout();
    router.push('/'); // Redirect to home page after logout
  };

  return (
    <div className="navigation-container">
      <div className="logo">
        <img src="/logo.png" alt="Company Logo" />

      </div>
      <nav className="navigation-menu">
        <button onClick={() => navigate('/app/dashboard')}>Dashboard</button>
        <button onClick={() => navigate('/app/analytics')}>Analytics</button>
        <button onClick={() => navigate('/app/accountManagement')}>Acc Management</button>
        <button onClick={() => navigate('/app/calendar')}>Calendar</button>
        <button onClick={() => navigate('/app/profileSettings')}>Settings</button>
        <button onClick={handleLogout}>Logout</button>
      </nav>
    </div>
  );
};

export default VerticalNavigation;
