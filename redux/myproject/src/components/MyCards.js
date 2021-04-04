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

function MyCards({data,searchdata}) {

    const dispatch = useDispatch();


useEffect(() => {
    dispatch(options())
    
}, [])

const filteredProducts1 = data?.filter((product) => {
  if (
   
    product.Description?.toLowerCase().includes(searchdata) 
  ) {
      console.log('yes')
    return product;
  }
});

    
    return (
    <div className="App">
        {filteredProducts1.map((ele,index)=>{
            return(

      <Card style= { { marginTop: 15 }}>
        <CardContent>
          <Grid container justify="center">
            <CardContent>
              <Typography> Description:{ele.Description} </Typography>
            </CardContent>
        </Grid>

        <Grid container justify="center">
            {/* <CardContent>
              <Typography> API:{ele.API} </Typography>
            </CardContent> */}

            <CardActions>
            <a href={ele.Link}> <Button variant="contained" color="primary" >
                {" "}
                show details{" "}
              </Button></a>
            </CardActions>
          </Grid>
        </CardContent>
      </Card>
   )       
            
        })}
    </div> 
  
    );
}

export default MyCards;
