import {
    Button,
    CardActions,
    CardContent,
    Card,
    Grid,
    Typography,
  } from "@material-ui/core";
  import React,{useEffect} from "react";
  import App from "../App";
  import { useDispatch, useSelector } from "react-redux";
  import { options } from "../actions/Apifetching";
import Navbar from "./Navbar";
import Home from "./Home";
import MyCards from './MyCards'

  function mydata() {
  <div className="App">
       <Navbar searchdata={searchdata} setsearchdata={setsearchdata}/>
       <Home />
       

      <button onClick={() => dispatch(options())}> click data </button>
      <Grid container>
        <Grid sm="6"></Grid>
        <MyCards searchdata={searchdata} data={myData} />
      </Grid>
    </div> 
  }
  
  export default mydata;
  