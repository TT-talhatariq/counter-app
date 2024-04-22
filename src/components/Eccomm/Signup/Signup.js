import React, { useState } from "react";
import "../Login/Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignup = async (e) => {
    try {
      e.preventDefault();

      let data = {
        email: email,
        password: password,
      };

      const res = await axios.post(
        "https://661ca64ee7b95ad7fa6ab882.mockapi.io/xShoe/user",
        data
      );
      if (res.status === 201) {
        alert("User Created Successfully, Do Login to Start using App.");
        navigate("/");
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
        <h3>Signup Here</h3>

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
          Already have an Account? <a href="/">Login</a>{" "}
        </p>

        <button onClick={handleSignup}>Register</button>
      </form>
    </>
  );
}

export default Signup;
