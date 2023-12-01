import { useRouter } from 'next/router';
import React from 'react';
import { useAuth } from "@/components/out-app/static-components/AuthContext";

const VerticalNavigation = () => {
  const router = useRouter();
  const { logout } = useAuth(); // Verwendung der logout Funktion aus AuthContext

  const navigate = (path) => {
    router.push(path);
  };

  const handleLogout = () => {
    logout(); // AuthContext logout Funktion aufrufen
    router.push('/'); // Sofortige Weiterleitung zur Startseite
  };

  return (
    <div className="navigation-container">
      <div className="logo">CLIKCE</div>
      <nav className="navigation-menu">
        <button onClick={() => navigate('/app/dashboard')}>Dashboard</button>
        <button onClick={() => navigate('/app/analytics')}>Analytics</button>
        <button onClick={() => navigate('/app/accountManagement')}>Acc Management</button>
        <button onClick={() => navigate('/app/calendar')}>Calendar</button>
        <button onClick={() => navigate('/app/functions')}>Functions</button>
        <button onClick={() => navigate('/app/profileSettings')}>Settings</button>
        {/* Logout Button hinzufügen */}
        <button onClick={handleLogout}>Logout</button>
      </nav>
    </div>
  );
};

export default VerticalNavigation;
