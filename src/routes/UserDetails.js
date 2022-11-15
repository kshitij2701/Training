import React from "react";
import { useParams } from "react-router-dom";
import {
  FacebookTwoTone,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";
import { Avatar, Grid, IconButton, Typography } from "@mui/material";

function UserDetails(props) {
  //   console.log(props);

  // fetching params
  const { id } = useParams();
  console.log(id);

  const { entireUserDatabase } = props;
  const data = entireUserDatabase[id];
  console.log(data); // fetching params
  const handleNavigate = (endpoint) => {
    console.log("====================================");
    console.log(endpoint);
    console.log("====================================");
    window.location = endpoint;
  };

  return (

  //   <Grid container>
  //       <Grid item xs={12} sm={6}>
  //       <Typography variant="caption" style={{marginLeft: "15%" }}>
  //             <h3>On user detail Page of user with id as : {id}</h3>  
  //         </Typography>
  //       </Grid>
    
  //   </Grid>

  <Grid container style={{ padding: 10 }}>
      <Grid item xs={12} md={8} lg={9}>
        <Typography variant="h4" component="h2">
          About
        </Typography>
        <Typography variant="body1" style={{ fontSize: 20 }}>
        Apple defines its restrictions on harmful substances, including definitions
        for what Apple considers to be “free of”, in the Apple Regulated Substances
        Specification. Every Apple product is free of PVC and phthalates with the
        exception of AC power cords in India, Thailand (for two-prong AC power cords)
        and South Korea, where we continue to seek government approval for our PVC and phthalates replacement.
  
          <br />
          Apple defines its restrictions on harmful substances, including definitions
          for what Apple considers to be “free of”, in the Apple Regulated Substances
          Specification. Every Apple product is free of PVC and phthalates with the
          exception of AC power cords in India, Thailand (for two-prong AC power cords)
          and South Korea, where we continue to seek government approval for our PVC and phthalates replacement.
          <br />
          Apple defines its restrictions on harmful substances, including definitions
          for what Apple considers to be “free of”, in the Apple Regulated Substances
          Specification. Every Apple product is free of PVC and phthalates with the
          exception of AC power cords in India, Thailand (for two-prong AC power cords)
          and South Korea, where we continue to seek government approval for our PVC and phthalates replacement.
          <br />
          Apple defines its restrictions on harmful substances, including definitions
          for what Apple considers to be “free of”, in the Apple Regulated Substances
          Specification. Every Apple product is free of PVC and phthalates with the
          exception of AC power cords in India, Thailand (for two-prong AC power cords)
          and South Korea, where we continue to seek government approval for our PVC and phthalates replacement.
          
        </Typography>
      </Grid>
      <Grid item xs={12} md={4} lg={3}>
        <Avatar
          variant="rounded"
          src={data.url}
          style={{
            // minHeight: 200,
            width: "100%",
            height: "auto",
          }}
          alt={data.name}
        />
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <IconButton onClick={() => handleNavigate(data.socialMedia.fb)}>
            <FacebookTwoTone style={{ color: "#1f5ed9", fontSize: 45 }} />
          </IconButton>
          <IconButton onClick={() => handleNavigate(data.socialMedia.google)}>
            <Twitter style={{ color: "#0abdf9", fontSize: 45 }} />
          </IconButton>
          <IconButton onClick={() => handleNavigate(data.socialMedia.ig)}>
            <Instagram style={{ color: "#1f5ed9", fontSize: 45 }} />
          </IconButton>
          <IconButton>
            <LinkedIn
              onClick={() => handleNavigate(data.socialMedia.ld)}
              style={{ color: "#1f5ed9", fontSize: 45 }}
            />
          </IconButton>
          </div>

          </Grid>
        </Grid>

          );
   }


    {/* // <div className="container">
    //   <div className="row">
    //     <div className="col-12 text-center">
    //       <h3>On user detail Page of user with id as : {id}</h3>
    //     </div>
    //   </div>
    // </div> */}
 

export default UserDetails;
