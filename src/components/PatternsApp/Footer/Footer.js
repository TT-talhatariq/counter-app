import React from "react";
import "./Footer.css";
import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <footer id="footer">
      <div class="col col1">
        <h3>CoolSite</h3>
        <p>
          Made with <span style={{ color: "#BA6573" }}>❤</span> by Jux
        </p>
        <div class="social">
          <a href="https://codepen.io/Juxtopposed" target="_blank" class="link">
            <img src="https://assets.codepen.io/9051928/codepen_1.png" alt="" />
          </a>
          <a
            href="https://twitter.com/juxtopposed"
            target="_blank"
            class="link"
          >
            <img src="https://assets.codepen.io/9051928/x.png" alt="" />
          </a>
          <a
            href="https://youtube.com/@juxtopposed"
            target="_blank"
            class="link"
          >
            <img src="https://assets.codepen.io/9051928/youtube_1.png" alt="" />
          </a>
        </div>
        <p>2024 © All Rights Reserved</p>
      </div>
      <div class="col col2">
        <p>About</p>
        <p>Our mission</p>
        <p>Privacy Policy</p>
        <p>Terms of service</p>
      </div>
      <div class="col col3">
        <p>Services</p>
        <p>Products</p>
        <p>Join our team</p>
        <p>Partner with us</p>
      </div>
      <div class="backdrop"></div>
    </footer>
  );
};

export default Footer;
