import React from "react";

import { Img } from "components";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

const DashboardColumnOne = (props) => {

  const [alert, setAlert] = React.useState({
    open: false,
    message: "",
    type: "",
  });

  const logOut = () => {
    signOut(auth);
    setAlert({
      open: true,
      type: "success",
      message: "Logout Successfull !",
    });
  };
  return (
    <>
      <div className={props.className}>
      <button style={{
        cursor: "pointer",
      }}
      onClick={logOut}
      >
      <Img
          src="images/img_image1.png"
          className="h-[30px] md:h-auto rounded-[50%] w-[30px]"
          alt="imageOne"
        />
      </button>
      </div>
    </>
  );
};

DashboardColumnOne.defaultProps = {};

export default DashboardColumnOne;
