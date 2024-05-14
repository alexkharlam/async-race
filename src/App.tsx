import { Outlet } from 'react-router-dom';
import Container from './components/layout/Container.tsx';

function App() {
  return (
    <Container>
      <Outlet />
    </Container>
  );
}

export default App;
