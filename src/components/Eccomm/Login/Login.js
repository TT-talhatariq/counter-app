import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      console.log(email, password);
      const res = await axios.get(
        "https://661ca64ee7b95ad7fa6ab882.mockapi.io/xShoe/user"
      );
      console.log(res.data);

      // Search if user exist or not

      let found = false;
      res.data.map((user) => {
        if (user.email === email && user.password === password) {
          found = true;
        }
      });

      if (found === true) {
        navigate("/home");
      } else {
        alert("Invalid Credentials");
      }
    } catch (err) {}
  };

  return (
    <>
      <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
      </div>
      <form>
        <h3>Do Login!</h3>

        <label for="username">Email</label>
        <input
          type="text"
          placeholder="Email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />

        <label for="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <p style={{ marginTop: "20px" }}>
          Don't you have an Account? <a href="/signup">Signup</a>{" "}
        </p>

        <button onClick={handleLogin}>Log In</button>
      </form>
    </>
  );
}

export default Login;
