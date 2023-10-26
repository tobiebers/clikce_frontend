import Image from 'public/logo.png';

export default function Footer() {
  return (
    <div className='d-flex justify-content-between align-items-center fixed-bottom text-secondary' style={{ backgroundColor: 'rgba(214, 235, 234, 0.7)' }}>
      <h6>© 2023 CLIKCE. All rights Reserved. <a href="/privacy-policy">Privacy Policy</a></h6>
      <img src="logo.png" alt="Your Image" width={80} height={80} className="img-fluid" />
    </div>
  );
}
