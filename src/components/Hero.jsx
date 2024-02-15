import React from "react";
import Button from "./lcomp/Button";
import { IoDownloadOutline } from "react-icons/io5";

const Hero = () => {
  return (
    <section className="Hero_section">
      <h2 className="green">Hello, I'm Alif Reza</h2>
      <h1>Product Designer</h1>
      <p>
        I’m from Singapore and I have been working as a Product Designer for
        more than 7 years. I’ve worked for a Hanziree company Pabloo as a
        Product Designer and Front-end Developer for 3 years.
      </p>

      <div className="dflex_str">
        <Button className="btn_bg" btnText="Email Me" />
        <Button
          className="btn_download"
          btnIcon={<IoDownloadOutline />}
          space={" "}
          btnText="Download CV"
        />
      </div>
    </section>
  );
};

export default Hero;
