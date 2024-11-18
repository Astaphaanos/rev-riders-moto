import { BrowserRouter as Router} from 'react-router-dom';
import Header from './components/PaginaPrincipal/Header';  // Importe o Header
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <AppRoutes />
      </Router>
    </div>
  );
}

export default App;
