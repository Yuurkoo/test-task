import React from "react";
import SignUp from "../../page/sign-up/SignUp";

const Greeting: React.FC = () => {
  return (
    <div className="greeting-page">
      <div className="greeting-title">
        {/* <h1>Welcome to the page</h1> */}
        <SignUp />
      </div>
    </div>
  );
};

export default Greeting;
