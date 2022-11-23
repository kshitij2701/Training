import { Button } from "@mui/material";
import React from "react";
import { connect } from "react-redux";

// export const TestComp = (props) => {
//   console.log(props);
//   return <div>TestComp</div>;
// };

import { fetchStatus } from "../redux/controllers/homeController";
export const TestComp = ({ a, dispatch }) => {
  console.log(a);
  const handleClick = () => {
    fetchStatus(a);
  };
  return (
    <div>
      <Button
        onClick={() => {
          // console.log("pressed");
          dispatch({ type: "counter/incremented" });
        }}>
        Press
      </Button>
      <Button
        onClick={handleClick}
        variant="contained"
        style={{ textTransform: "none" }}>
        Get status
      </Button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  a: state.home,
});

// const mapDispatchToProps = {};

// export default connect(mapStateToProps, mapDispatchToProps)(TestComp);

export default connect(mapStateToProps)(TestComp);