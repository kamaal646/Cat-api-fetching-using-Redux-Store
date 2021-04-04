import React,{useState} from "react";
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { options } from "./actions/Apifetching";
import Home from "./components/Home";
import MyCards from "./components/MyCards";
import { Grid } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import SignUp from './components/SignUp'
import LogIn from './components/LogIn'

function App() {
  const isLogged = useSelector((state) => state.isLogged);
  const myData = useSelector((state) => state.fetchData);
  const [searchdata, setsearchdata] = useState('')

  const dispatch = useDispatch();

  return (

    // <div className="App">
    //    <Navbar searchdata={searchdata} setsearchdata={setsearchdata}/>
    //    <Home />
       

    //   <button onClick={() => dispatch(options())}> click data </button>
    //   <Grid container>
    //     <Grid sm="6"></Grid>
    //     <MyCards searchdata={searchdata} data={myData} />
    //   </Grid>
    // </div> 
<div className="App">

  <Router>
        <Navbar setsearchdata={setsearchdata} searchdata={searchdata}/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/My"><MyCards searchdata={searchdata} data={myData}/></Route>
        <Route exact path="/signUp" component={SignUp} />
        <Route exact path="/logIn" component={LogIn} />
      </Switch>
    </Router>
    </div>



  );
  
}

export default App;
