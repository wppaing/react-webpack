import { RouterProvider } from 'react-router-dom';
import router from '../router';

const App = () => {
  console.log('rendering TestApp');
  return <RouterProvider router={router} />;
};

export default App;
