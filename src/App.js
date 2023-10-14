
import './App.css';
import TableApi from './tableapi';
import FormApi from './formapi'
import 'bootstrap/dist/css/bootstrap.css';
import NavMar  from './navmar';
function App() {
  return (
    <div className="App">
      <NavMar></NavMar>
      <FormApi></FormApi>
      <br></br>
      <TableApi></TableApi>
    </div>
  );
}

export default App;
