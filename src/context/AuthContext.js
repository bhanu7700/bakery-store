import { createContext, useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { TiTick } from "react-icons/ti";
import { MdError } from "react-icons/md";
import { IoWarningOutline } from "react-icons/io5";

export const Auth = createContext();

function AuthContext({ children }) {
  const [test, setTest] = useState(true);
  const [modalShow, setModalShow] = useState(false);
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    userId: "",
  });
  const [registerDetails, setRegisterDetails] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });

  const validateEmail = (email) => {
    if (
      email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      return true;
    } else {
      return false;
    }
  };

  const notify = (value) =>
    toast.success(value, {
      icon: <TiTick size={30} />,
    });
  const notifyError = (value) =>
    toast.error(value, {
      icon: <MdError size={30} color="red" />,
    });
  const notifyWarning = (value) =>
    toast.warning(value, {
      icon: <IoWarningOutline size={30} />,
    });

  const handleCreateAccount = (e) => {
    e.preventDefault();
    // const token = localStorage.getItem("accessToken");

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    // myHeaders.append("Authorization", `Bearer ${token}`);

    var raw = JSON.stringify({
      email: registerDetails.email,
      username: registerDetails.username,
      password: registerDetails.password,
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    const ValidateEmail = validateEmail(registerDetails.email);
    if (ValidateEmail) {
      fetch(`http://localhost:5001/api/users/register`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log("details", result);
          if (
            result.type === "duplicate_error" ||
            result.type === "missing_fields"
          ) {
            notifyError(result.message);
            setModalShow(false);
          } else if (result._id) {
            // localStorage.setItem("customerId", result.customer.id);
            notify("user registerd!");
            setModalShow(false);

            // setLoginDetails(result.customer);
            // setCustomerDetails(result);
          }
        })
        .catch((error) => console.log("error", error));
    } else {
      notifyError("Invalid Email!");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    // const token = localStorage.getItem("accessToken");

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    // myHeaders.append("Authorization", `Bearer ${token}`);

    var raw = JSON.stringify({
      username: loginDetails.username,
      password: loginDetails.password,
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    await fetch(`http://localhost:5001/api/users/login`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log("details", result);
        if (result.type === "invalid" || result.type === "missing_fields") {
          notifyError(result.message);
          setModalShow(false);
        } else if (result.id) {
          // localStorage.setItem("customerId", result.customer.id);
          localStorage.setItem("accessToken", result.accessToken);
          setUserDetails({
            username: result.username,
            email: result.email,
            userId: result.id,
          });
          notify("Logged in Successfully!");
          setModalShow(false);

          // setLoginDetails(result.customer);
          // setCustomerDetails(result);
        }
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <>
      <Auth.Provider
        value={{
          test,
          setTest,
          registerDetails,
          setRegisterDetails,
          loginDetails,
          setLoginDetails,
          handleCreateAccount,
          modalShow,
          setModalShow,
          handleLogin, userDetails
        }}
      >
        {children}
      </Auth.Provider>
    </>
  );
}

export default AuthContext;
