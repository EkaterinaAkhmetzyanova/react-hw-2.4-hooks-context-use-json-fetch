import './App.css';
import Examples from './components/Examples';

function App() {
  return (
    <div>
    <Examples endpoint='data' />
    <Examples endpoint='error' />
    <Examples endpoint='loading' />
    </div>
  );
}

export default App;
