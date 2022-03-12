import React from "react";
// images
import Tv from "./images/tv.png";
import Mobile from "./images/mobile.jpg";
import Device from "./images/device.png";
import Chillden from "./images/childen.png";
// CSS
import "./Css/Main.css";
import "./Css/First.css";
import "./Css/Second.css";

const Advertise = () => {
  return (
    <>
      {/* first */}
      <section className="first">
        <div className="advertise">
          <section className="text">
            <h1>Enjoy on your TV.</h1>
            <h2>
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </h2>
          </section>
          <img src={Tv} alt="Tv" className="img1" />
        </div>
      </section>
      {/* second */}
      <section className="second">
        <div className="advertise">
          <section className="text">
            <h1>Download your shows to watch offline.</h1>
            <h2>
              Save your favourites easily and always have something to watch.
            </h2>
          </section>
          <img src={Mobile} alt="Tv" className="img2" />
        </div>
      </section>
      {/* third */}
      <section className="first">
        <div className="advertise">
          <section className="text">
            <h1>Watch everywhere.</h1>
            <h2>
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </h2>
          </section>
          <img src={Device} alt="Tv" className="img1" />
        </div>
      </section>
      {/* fourth */}
      <section className="second">
        <div className="advertise">
          <section className="text">
            <h1>Create profiles for children.</h1>
            <h2>
              Send children on adventures with their favourite characters in a
              space made just for them—free with your membership.
            </h2>
          </section>
          <img src={Chillden} alt="Tv" className="img2" />
        </div>
      </section>
    </>
  );
};

export default Advertise;