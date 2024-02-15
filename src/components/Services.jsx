import React from "react";
import { PiStrategyThin } from "react-icons/pi";

const Services = () => {
  return (
    <section className="container_pd Services_section">
      <div className="Services_details dflex_btw">
        <div className="Services_heading">
          7+ years experience <br /> working
        </div>

        <div className="dflex_btw col">
          <div className="Services_line">
            <div className="line"></div>
            <span className="green">Services</span>
          </div>
          <p>
            Discover the best services I offer, designed to ensure the success
            of your project.
          </p>
        </div>
      </div>

      <div className="Services_boxes">
        <div className="services_box">
          <div className="icons">
            <div className="circle"></div>
            <PiStrategyThin size={60} className="box_icon" />
          </div>
          <h3>Product Design</h3>
          <p>
            I offer innovative and attention-grabbing product design services.
            From initial ideation to implementation.
          </p>
        </div>
        <div className="services_box">
          <div className="icons">
            <div className="circle"></div>
            <PiStrategyThin size={60} className="box_icon" />
          </div>
          <h3>Product Design</h3>
          <p>
            I offer innovative and attention-grabbing product design services.
            From initial ideation to implementation.
          </p>
        </div>
        <div className="services_box">
          <div className="icons">
            <div className="circle"></div>
            <PiStrategyThin size={60} className="box_icon" />
          </div>
          <h3>Product Design</h3>
          <p>
            I offer innovative and attention-grabbing product design services.
            From initial ideation to implementation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
