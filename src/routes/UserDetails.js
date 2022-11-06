import React from "react";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

function UserDetails(props) {
  //   console.log(props);

  // fetching params
  const { id } = useParams();
  console.log(id);

  return (

    <Grid container>
        <Grid item xs={12} sm={6}>
        <Typography variant="caption" style={{marginLeft: "15%" }}>
              <h3>On user detail Page of user with id as : {id}</h3>  
          </Typography>
        </Grid>
    
  </Grid>


    // <div className="container">
    //   <div className="row">
    //     <div className="col-12 text-center">
    //       <h3>On user detail Page of user with id as : {id}</h3>
    //     </div>
    //   </div>
    // </div>
  );
}

export default UserDetails;
