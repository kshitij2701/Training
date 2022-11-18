import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import UserCard from "../components/UserCard";
import { Grid } from "@mui/material";
import TestComp from "../components/TestComp";

// const userData = [
//   {
//     name: "Kshitij Shishodia",
//     age: 21,
//     designation: "Full Stack Dev",
//     url: "https://cdn5.vectorstock.com/i/1000x1000/51/99/icon-of-user-avatar-for-web-site-or-mobile-app-vector-3125199.jpg",
//     _id: 1,
//   },
//   {
//     name: "Simran Shishodia",
//     age: 22,
//     designation: "Analyst",
//     url: "https://cdn5.vectorstock.com/i/1000x1000/51/99/icon-of-user-avatar-for-web-site-or-mobile-app-vector-3125199.jpg",
//     _id: 2,
//   },
//   {
//     name: "Dhruv Shishodia",
//     age: 18,
//     designation: "Hard Coder",
//     _id: 3,
//   },
// ];
const data = [
  {
    url: "https://economictimes.indiatimes.com/thumb/msid-91306613,width-1599,height-1067,resizemode-4,imgsize-77120/apple-iphone-.jpg?from=mdr",
    prodName: "Product-1",
    _id: 1,
    desc : "Apple defines its restrictions on harmful substances, including definitions for what Apple considers to be “free of”, in the Apple Regulated Substances Specification. Every Apple product is free of PVC and phthalates with the exception of AC power cords in India, Thailand (for two-prong AC power cords) and South Korea, where we continue to seek government approval for our PVC and phthalates replacement.",
  },
  {
    url: "https://economictimes.indiatimes.com/thumb/msid-91306613,width-1599,height-1067,resizemode-4,imgsize-77120/apple-iphone-.jpg?from=mdr",
    prodName: "Product-2",
    _id: 2,
    desc : "Apple defines its restrictions on harmful substances, including definitions for what Apple considers to be “free of”, in the Apple Regulated Substances Specification. Every Apple product is free of PVC and phthalates with the exception of AC power cords in India, Thailand (for two-prong AC power cords) and South Korea, where we continue to seek government approval for our PVC and phthalates replacement.",
  },
  {
    url: "https://economictimes.indiatimes.com/thumb/msid-91306613,width-1599,height-1067,resizemode-4,imgsize-77120/apple-iphone-.jpg?from=mdr",
    prodName: "Product-3",
    _id: 3,
    desc : "Apple defines its restrictions on harmful substances, including definitions for what Apple considers to be “free of”, in the Apple Regulated Substances Specification. Every Apple product is free of PVC and phthalates with the exception of AC power cords in India, Thailand (for two-prong AC power cords) and South Korea, where we continue to seek government approval for our PVC and phthalates replacement.",
  },
  {
    url: "https://economictimes.indiatimes.com/thumb/msid-91306613,width-1599,height-1067,resizemode-4,imgsize-77120/apple-iphone-.jpg?from=mdr",
    prodName: "Product-4",
    _id: 4,
    desc : "Apple defines its restrictions on harmful substances, including definitions for what Apple considers to be “free of”, in the Apple Regulated Substances Specification. Every Apple product is free of PVC and phthalates with the exception of AC power cords in India, Thailand (for two-prong AC power cords) and South Korea, where we continue to seek government approval for our PVC and phthalates replacement.",
  },
];

function Home(props) {
  const dummy = {
    title: "Hey lets Get Started",
  };
  //  useParams();
  // console.log(useParams());
  console.log(props);
  // console.log(window.location);
  return (
    <>
      <TestComp />
      <Link to="/about">Go to about</Link>
      <h1>{dummy.title}</h1>
      <br />
      <Grid container>
        {data.map((val) => {
          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              // spacing={3}
              key={val._id.toString()}>
              <ProductCard values={val} />
            </Grid>
          );
        })}
      </Grid>
      <Grid container>
      {props.userData.map((val, ind) =>  {
          return (
            <Grid item xs={12} sm={6}>
              <UserCard {...val} ind={ind} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

export default Home;
