import { RouterProvider } from 'react-router-dom';
import router from '../router';

const App = () => {
  console.log('rendering MainApp');
  return <RouterProvider router={router} />;
};

export default App;
