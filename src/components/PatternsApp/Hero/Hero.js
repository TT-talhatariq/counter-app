import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="container-fluid hero-container">
      <div className="row">
        <div className="col-md-6">
          <h1 className="font-weight-bold heading">
            Welcome to Our Website. Buy the Laptop
          </h1>
          <p className="subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac
            turpis quis mi ullamcorper aliquet. Sed vestibulum risus id volutpat
            eleifend. Proin viverra pharetra lacus. Phasellus id dui non ex
            aliquam ultricies.
          </p>

          <div className="row">
            <button className="btn btn-success hero-call-to-action action-btn">
              Try for Free
            </button>
            <button className="btn btn-custom hero-call-to-action action-btn">
              How it Works
            </button>
          </div>
        </div>
        <div className="col-md-6">
          <img
            src="https://images.unsplash.com/photo-1526657782461-9fe13402a841?q=80&w=3052&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="img-fluid rounded-top-right hero-img"
            alt="Your Image"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
