import { useRouter } from 'next/router';

const VerticalNavigation = () => {
  const router = useRouter();

  const navigate = (path) => {
    router.push(path);
  };

  return (
    <div className="navigation-container">
      <div className="logo">CLIKCE</div>
      <nav className="navigation-menu">
        <button onClick={() => navigate('app/dashboard')}>Dashboard</button>
        <button onClick={() => navigate('app/analytics')}>Analytics</button>
        <button onClick={() => navigate('app/accountManagement')}>Acc Management</button>
        <button onClick={() => navigate('app/calendar')}>Calendar</button>
        <button onClick={() => navigate('app/functions')}>Functions</button>
        <button onClick={() => navigate('app/settings')}>Settings</button>
      </nav>
    </div>
  );
};

export default VerticalNavigation;
