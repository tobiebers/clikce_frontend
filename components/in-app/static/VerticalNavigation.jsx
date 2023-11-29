import { useRouter } from 'next/router';

const VerticalNavigation = () => {
  const router = useRouter();

  const navigate = (path) => {
    router.push(path);
  };

  return (
    <div className="navigation-container">
      <div className="logo">CLIKEE</div>
      <nav className="navigation-menu">
        <button onClick={() => navigate('/dashboard')}>Dashboard</button>
        <button onClick={() => navigate('/analytics')}>Analytics</button>
        <button onClick={() => navigate('/account-management')}>Acc Management</button>
        <button onClick={() => navigate('/ad-manager')}>Ad Manager</button>
        <button onClick={() => navigate('/calendar')}>Calendar</button>
        <button onClick={() => navigate('/messages')}>Messages</button>
        <button onClick={() => navigate('/functions')}>Functions</button>
        <button onClick={() => navigate('/settings')}>Settings</button>
      </nav>
    </div>
  );
};

export default VerticalNavigation;
