import { Link } from 'react-router-dom';

export default function Account() {
  return (
    <div style={{ height: '100vh', backgroundColor: 'skyblue' }}>
      <h1>Account Info</h1>
      <Link to={'/'}>Go to Home</Link>
    </div>
  );
}
