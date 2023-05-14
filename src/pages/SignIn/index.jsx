/* eslint-disable jsx-a11y/anchor-is-valid */
//* Packages import */
import React from "react";

//* Components import */
import { Img, Input, Text } from "components";
//* Firebase import */
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Link } from "react-router-dom";
import { useAuth } from "Context";

const SignInPage = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
 const {alert,setAlert} = useAuth();

  const handleSubmit = async () => {
    if (!email || !password) {
      setAlert({
        open: true,
        message: "Please fill all the Fields",
        type: "error",
      });
      return;
    }

    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      setAlert({
        open: true,
        message: `Login Successful. Welcome ${result.user.email}`,
        type: "success",
      });
      console.log(result);
    } catch (error) {
      setAlert({
        open: true,
        message: error.message,
        type: "error",
      });
      return;
    }
  };

   console.log("alert", alert);
  const googleProvider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        setAlert({
          open: true,
          message: `Sign In Successful. Welcome ${res.user.email}`,
          type: "success",
        });
      })
      .catch((error) => {
        setAlert({
          open: true,
          message: error.message,
          type: "error",
        });
        return;
      });
  };

  return (
    <>
      <div className="flex sm:flex-col md:flex-col flex-row font-montserrat sm:gap-5 md:gap-5 items-center mx-auto w-full">
        <div className="bg-black_900 flex-col flex md:hidden items-center justify-start p-[171px] md:px-5 w-auto md:w-full">
          <Text
            className="mb-[301px] mt-[292px] text-left text-white_A700 w-auto"
            as="h1"
            variant="h1"
          >
            Board.
          </Text>
        </div>
        <div className="bg-gray_100 flex flex-col items-center justify-end p-[223px] md:px-5 w-3/5 md:w-full">
          <div className="flex flex-col items-start justify-start mb-[33px] mt-[39px] w-[95%] md:w-full">
            <Text
              className="font-montserrat text-black_900 text-left w-auto"
              as="h2"
              variant="h2"
            >
              Sign In
            </Text>
            <Text
              className="font-lato mt-1 not-italic text-black_900 text-left w-auto"
              as="h5"
              variant="h5"
            >
              Sign in to your account
            </Text>
            <div className="flex flex-row font-montserrat gap-[25px] items-center justify-between mt-[23px] w-full">
              <div className="bg-cover bg-no-repeat bg-white rounded-lg flex flex-col h-[30px] items-center justify-end p-[5px] w-[47%]">
                <div
                  className="common-pointer flex flex-row gap-2.5 items-start justify-start mt-0.5 w-[84%] md:w-full"
                  onClick={signInWithGoogle}
                >
                  <Img
                    src="images/img_googleicon1.svg"
                    className="h-3.5 w-3.5"
                    alt="googleiconOne"
                  />
                  <Text
                    className="not-italic text-center text-gray_600 w-auto"
                    variant="body1"
                  >
                    Sign in with Google
                  </Text>
                </div>
              </div>
              <div className="bg-cover bg-no-repeat bg-white rounded-lg flex flex-col h-[30px] items-center justify-end p-[5px] w-[47%]">
                <div className="flex flex-row gap-[11px] items-start justify-center w-[78%] md:w-full">
                  <Img
                    src="images/img_volume.svg"
                    className="h-3.5 w-auto"
                    alt="volume"
                  />
                  <Text
                    className="mt-0.5 not-italic text-center text-gray_600 w-auto"
                    variant="body1"
                  >
                    Sign in with Apple
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col font-lato gap-[21px] items-center justify-start mt-[25px] w-full">
              <div className="bg-cover bg-no-repeat flex flex-col bg-white rounded-xl h-[317px] items-center justify-end p-[30px] sm:px-5 w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="mt-5 not-italic text-black_900 text-left w-auto"
                    as="h5"
                    variant="h5"
                  >
                    Email Address
                  </Text>
                  <Input
                    wrapClassName="mt-2 w-full"
                    className="font-normal leading-[normal] not-italic p-0 placeholder:text-black_900 text-base text-black_900 text-left w-full"
                    name="groupThree"
                    placeholder="johndoe@gmail.com"
                    {...{ value: email }}
                    onChange={(e) => setEmail(e.target.value)}
                    shape="RoundedBorder10"
                    size="sm"
                    variant="FillGray200"
                  ></Input>
                  <Text
                    className="mt-5 not-italic text-black_900 text-left w-auto"
                    as="h5"
                    variant="h5"
                  >
                    Password
                  </Text>
                  <Input
                    wrapClassName="mt-2 w-full"
                    className="font-normal leading-[normal] not-italic p-0 placeholder:text-black_900 text-base text-black_900 text-left w-full"
                    name="groupThree"
                    placeholder="Enter your password"
                    {...{ value: password }}
                    onChange={(e) => setPassword(e.target.value)}
                    shape="RoundedBorder10"
                    size="sm"
                    variant="FillGray200"
                  ></Input>
                  <a
                    href="javascript:"
                    className="font-normal mt-[21px] not-italic text-base text-blue_700 text-left w-auto"
                  >
                    <Text className="">Forgot password?</Text>
                  </a>
                  <div
                    className="bg-cover bg-no-repeat flex flex-col rounded-xl bg-black font-montserrat h-10 items-center justify-end mt-[17px] p-[9px] w-full"
                  
                    onClick={handleSubmit}
                  >
                    <a
                      href="javascript:"
                      className="font-bold text-base text-center text-white_A700 w-auto"
                    >
                      <Text className="">Sign In</Text>
                    </a>
                  </div>
                </div>
              </div>
              <Text
                className="not-italic text-center text-gray_600 w-auto"
                as="h5"
                variant="h5"
              >
                Don’t have an account?{" "} <Link to="/signup" className="text-blue_700">Register</Link>
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInPage;
