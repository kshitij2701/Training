import React from "react";
import UserCard from "../components/UserCard";
import { Grid } from "@mui/material";

const userData = [
  {
    name: "Kshitij Shishodia",
    age: 21,
    designation: "Full Stack Dev",
    url: "https://cdn5.vectorstock.com/i/1000x1000/51/99/icon-of-user-avatar-for-web-site-or-mobile-app-vector-3125199.jpg",
    _id: 1,
  },
  {
    name: "Simran Shishodia",
    age: 22,
    designation: "Analyst",
    url: "https://cdn5.vectorstock.com/i/1000x1000/51/99/icon-of-user-avatar-for-web-site-or-mobile-app-vector-3125199.jpg",
    _id: 2,
  },
  {
    name: "Dhruv Shishodia",
    age: 18,
    designation: "Hard Coder",
    _id: 3,
  },
];
function About() {
  console.log(window.location);

  return (

    <Grid container>
        {userData.map((val) => {
          return (
            <Grid item xs={12} sm={6}>
              <UserCard {...val} />
            </Grid>
          );
        })}
      </Grid>
    // <div className="container">
    //   <div className="row">
    //     {userData.map((val) => {
    //       return (
    //         <div className="col-12 col-sm-6 p-3">
    //           <UserCard {...val} />
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>
  );
}

export default About;
