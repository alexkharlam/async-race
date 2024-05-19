import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Container from './components/layout/Container.tsx';

function App() {
  return (
    <Container>
      <Outlet />
      <ToastContainer />
    </Container>
  );
}

export default App;
