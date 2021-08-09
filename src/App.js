import { BrowserRouter as Router, Route } from 'react-router-dom';
import './static/css/style.css';
import Login from './component/auth/Login' ;
import Base from './component/widget/Base';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Login}></Route>
      <Route path="/panel" component={Base}></Route>
    </Router>
  );
}

export default App;
