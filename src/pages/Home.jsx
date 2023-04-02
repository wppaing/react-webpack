import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={{ height: '100vh' }}>
      <h1>Welcome to Home</h1>
      <Link to={'/account'}>Go to Account</Link>
    </div>
  );
}
