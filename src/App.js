import './App.css';
// import TeamDetail from './Components/TeamDetail/TeamDetail';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ClubDetail from './Components/ClubDetail/ClubDetail';

function App() {
 
  return (
   <Router>
     <Switch>
       <Route path="/home">
         <Home></Home>
       </Route>
       <Route path="/ClubDetail/:strTeam">
        <ClubDetail></ClubDetail>
       </Route>
       <Route exact path="/">
        <Home/>
       </Route>
       
     </Switch>
   </Router>
   
    
  );
}

export default App;
