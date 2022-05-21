import axios from "axios";
import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { useUserContextValue } from "../context";

const move = keyframes`
0%{
    opacity:0;

}
95%{
    opacity:1;

}

`;
const BackgroundBox = styled.div`
  background: rgba(255, 255, 255, 0.3);
  height: 35vh;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 15rem auto;

  position: relative;
  border-radius: 23px;

  .text1 {
    left: 250px;
    z-index: ${(props) => (props.clicked ? "-700" : "700")};
    transform: ${(props) =>
      props.clicked ? "translateX(0)" : "translateX(100%)"};
    transition: transform 1s ease-in-out;
    animation: ${(props) => (props.clicked ? move : "none")} 1.5s;
  }

  .text2 {
    right: 200px;
    z-index: ${(props) => (props.clicked ? "700" : "-700")};
    animation: ${(props) => (props.clicked ? "none" : move)} 1.5s;

    transform: ${(props) =>
      props.clicked ? "translateX(-100%)" : "translateX(0%)"};
    transition: transform 1s ease-in-out;
  }

  .signin {
    color: #fff;
    position: absolute;
    top: 0%;
    text-align: center;
    z-index: ${(props) => (props.clicked ? "-600" : "500")};
    transform: ${(props) => (props.clicked ? "none" : "translateX(-50%)")};
    transition: all 1s;
  }
  .signup {
    color: #fff;
    position: absolute;
    top: 0%;
    text-align: center;
    z-index: ${(props) => (props.clicked ? "500" : "-500")};
    transform: ${(props) => (props.clicked ? "translateX(50%)" : "none")};
    transition: all 1s;
  }
`;

const Box1 = styled.div`
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  background-color: #343434;
  width: 50%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;

  transform: ${(props) =>
    props.clicked ? "translateX(90%)" : "translateX(10%)"};

  transition: transform 1s;

  &::after,
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #343434;

    z-index: -200;
  }

  &::before {
    top: 3rem;
    border-radius: 23px;
    border: 1px solid #fff;
  }

  &::after {
    bottom: 3rem;
    border-radius: 23px 23px 0 0;
    border-top: 1px solid #fff;
    border-right: 1px solid #fff;
    border-left: 1px solid #fff;
  }
`;

const Box2 = styled.div`
  background-color: #454545;
  width: 45%;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;

  z-index: 600;
  transform: ${(props) =>
    props.clicked ? "translateX(-122%)" : "translateX(0%)"};
  transition: transform 1s;

  border-radius: ${(props) =>
    props.clicked ? "23px 0 0 23px" : "0 23px 23px 0"};
`;

const Form = styled.form`
  color: #1b1b1b;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 4rem;

  /* z-index: 100; */
`;

const Input = styled.input`
  background-color: #fff;
  border: none;
  border-bottom: 2px solid #053271;

  padding: 1rem 2rem;
  margin: 0.5rem 0;
  width: 100%;

  &:focus {
    outline: none;
    border: none;
    border: 2px solid #053271;
  }
`;

const Button = styled.button`
  border-radius: 3px;
  padding: 1rem 3.5rem;
  margin-top: 1rem;
  border: 1px solid black;
  background-color: black;
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
  letter-spacing: 1px;

  box-shadow: 0 7px #999;

  &:hover {
    background-color: #1b1b1b;
  }
  &:active {
    background-color: black;

    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }

  &:focus {
    outline: none;
  }
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 2rem;
`;

const Link = styled.a`
  text-decoration: none;
  color: #333;
  font-size: 1.4rem;
  margin: 1rem 0;
`;

const ButtonAnimate = styled.button`
  position: absolute;
  z-index: 1000;
  height: 5rem;
  width: 5rem;
  top: 70%;
  border: none;
  cursor: pointer;

  right: ${(props) => (props.clicked ? "52%" : "42%")};

  transform: ${(props) => (props.clicked ? "rotate(360deg)" : "rotate(0)")};

  transition: all 1.5s;
  background-color: transparent;

  &::before {
    content: "🦙";
    font-size: 4rem;
  }

  &:focus {
    outline: none;
  }
`;

const Text = styled.div`
  position: absolute;
  z-index: 1000;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  letter-spacing: 0.2rem;
  color: #fff;

  .attention {
    font-size: 2.5rem;
    position: relative;
    margin-top: 2rem;
  }

  .attention-icon {
    position: absolute;
    right: ${(props) => (props.clicked ? "0" : "none")};
    top: 100%;
    font-size: 5rem;
  }
`;

export const LogFormComponent = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const { setUserAuth, userAuth } = useUserContextValue();

  // SIGNUP TIME BABY!!
  const [user, setuser] = useState({
    username: "",
    email: "",
    password: "",
  });

  //handle Inputes
  const handleInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setuser({ ...user, [name]: value });
  };

  //handle Submitities
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { username, email, password } = user;

    //Using Proxy instead of the deafult port 3000 to access the API hehe

    const res = await fetch(
      "https://heroku-lama-api.herokuapp.com/api/user/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      }
    ).then((res) => {
      return res.json();
    });
    if (res.error !== null || !res) {
      window.alert(res.error);
    } else {
      window.alert("Registered Successfully");
      setClick(!click);
    }
  };

  //LOGIN TIME BABY!
  const [loginUser, setLoginUser] = useState({
    username: "",
    password: "",
  });

  const handleLoginChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setLoginUser({ ...loginUser, [name]: value });
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    const { username, password } = loginUser;
    //Using Proxy instead of the deafult port 3000 to access the API hehe

    const res = await fetch(
      "https://heroku-lama-api.herokuapp.com/api/user/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      }
    ).then((res) => {
      return res.json();
    });
    console.log(res);
    if (res.error !== null || !res) {
      window.alert(res.error);
    } else {
      setUserAuth(username);
      localStorage.setItem("username", username);
      const token = res.data.token;
      sessionStorage.setItem("authtoken", token);
      console.log(userAuth);
      window.alert("Logged In Successfully");

      // window.location.reload();
    }
  };

  // const result = JSON.parse(sessionStorage.getItem("data"));
  // console.log(result);
  return (
    <>
      {" "}
      <BackgroundBox clicked={click}>
        <ButtonAnimate clicked={click} onClick={handleClick}></ButtonAnimate>

        <Form className="signin" onSubmit={handleLoginSubmit} method="POST">
          <Title>Log In</Title>
          <Input
            type="text"
            placeholder="Username"
            name="username"
            value={loginUser.username}
            onChange={handleLoginChange}
          />
          <Input
            type="password"
            placeholder="Password"
            name="password"
            value={loginUser.password}
            onChange={handleLoginChange}
          />
          <Button type="submit" value="login">
            Log In
          </Button>
        </Form>

        <Form className="signup" onSubmit={handleSubmit} method="POST">
          <Title>Sign Up</Title>
          <Input
            type="text"
            placeholder="Username"
            name="username"
            value={user.username}
            onChange={handleInput}
          />

          <Input
            type="email"
            placeholder="E-mail"
            name="email"
            value={user.email}
            onChange={handleInput}
          />
          <Input
            type="password"
            placeholder="Password"
            name="password"
            value={user.password}
            onChange={handleInput}
          />
          <Link href="#" onClick={handleClick}>
            Already have an Account?
          </Link>
          <Button type="submit" value="login">
            Sign Up
          </Button>
        </Form>

        <Text className="text1" clicked={click}>
          <h1 style={{ fontSize: 32 }}>Welcome!</h1>
          Don't have an account?
          <br />
          <span style={{ fontSize: 32 }} className="attention">
            Click on LaMa
          </span>
          <span className="attention-icon">⤶</span>
        </Text>

        <Text className="text2" clicked={click}>
          <h1 style={{ fontSize: 32 }}>Hi There!</h1>
          Already have an account?
          <br />
          <span style={{ fontSize: 32 }} className="attention">
            Click on LaMa
          </span>
          <span className="attention-icon">⤷</span>
        </Text>

        <Box1 clicked={click} />
        <Box2 clicked={click} />
      </BackgroundBox>
    </>
  );
};
