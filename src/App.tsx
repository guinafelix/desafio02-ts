import { Card } from './components/Card/Card';
import { login } from './services/login';

function App() {
  return (
    <Card login={login}></Card>
  );
}

export default App;
