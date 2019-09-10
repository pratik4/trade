import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import imageone from '../../assets/images/LANDINGPAGEIMAGE1.png';
import office from '../../assets/images/landingpageloc.png';
import phone from '../../assets/images/landingpagephone.png';
import queries from '../../assets/images/landingpagemail.png';
import easy from '../../assets/images/easy.png'
import stats from '../../assets/images/stats.png'
import social from '../../assets/images/social.png'
import support from '../../assets/images/support.png';
import trust from '../../assets/images/trust.png'
import dashboard from '../../assets/images/dashboard.png';
import heart from '../../assets/images/heart-solid.svg';

import '../../assets/css/index.css';

class Landing extends Component {
  render() {
    return (
      <Fragment>
        <section className="section-one">
          <div  className="hero is-medium">
            <div className="hero-body">
              <div className="container">
                <div className="columns is-mobile">
                  <div className="column is-9">
                    <div className="subtitle is-4 is-spaced">
                      INTRODUCING <strong>REWIND</strong>
                    </div>
                    <div className="subtitle text-2">
                      A global platform for buying and selling scraps.
                    </div>
                    <div>
                      <a className="button is-black">
                        Learn More
                      </a>
                    </div>
                  </div>
                  <div className='column is-3'>
                    <div className="tile is-vertical">
                      <div className="tile is-child">
                        <Link to="/buyer" className="button is-primary">
                          Buy Scrap
                        </Link>
                      </div>
                      <div className="tile is-child">
                        <Link to="/seller" className="button is-primary">
                          Sell Scrap
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>

      <section>
        <div className="hero">
          <div className="hero-body">
            <div className="container">
              <div className="columns is-mobile">
                <div className="column is-6">
                  <figure className="image ">
                    <img src={imageone} />
                  </figure>
                </div>
                <div className="column is-6">
                  <div className="tile is-vertical">
                    <div className="tile is-child">
                      <div className="box tile-box">
                        <div className="level-left is-mobile">
                          <div className="level-item">
                            <img className="image" src={easy} />
                          </div>
                          <div className="level-item">
                            <span className="title">Easy to Sell </span>
                          </div>
                        </div>
                        <div className="content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                        </div>
                      </div>
                    </div>
                    <div className="tile is-child">
                    <div className="box tile-box">
                      <div className="level-left is-mobile">
                        <div className="level-item">
                          <img className="image" src={stats} />
                        </div>
                        <div className="level-item">
                          <span className="title">Manage Your Agreements</span>
                        </div>
                      </div>
                      <div className="content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                      </div>
                    </div>
                    </div>
                    <div className="tile is-child">
                    <div className="box tile-box">
                      <div className="level-left is-mobile">
                        <div className="level-item">
                          <img className="image" src={social} />
                        </div>
                        <div className="level-item">
                          <span className="title">Connect with other buyers</span>
                        </div>
                      </div>
                      <div className="content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section>
        <div className="hero has-background-black">
          <div className="hero-body">
            <div className="container">
              <div className="title has-text-white is-spaced has-text-centered">
                Our Features
              </div>
              <div className="level">
                <div className="level-item  has-text-centered">
                  <div className="level-left is-mobile">
                    <div className="level-item">
                      <img className="image" src={trust} />
                    </div>
                    <div className="level-item">
                      <span className="title is-5 has-text-white">Trusted Company</span>
                    </div>
                  </div>
                </div>
                <div className="level-item  has-text-centered">
                <div className="level-left is-mobile">
                    <div className="level-item">
                      <img className="image" src={support} />
                    </div>
                    <div className="level-item">
                      <span className="title is-5 has-text-white">24/7 Support</span>
                    </div>
                  </div>
                </div>
                <div className="level-item  has-text-centered">
                <div className="level-left is-mobile">
                  <div className="level-item">
                    <img className="image" src={dashboard} />
                  </div>
                  <div className="level-item">
                    <span className="title is-5 has-text-white">Dashboard Support</span>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='section-four'>
        <div className="hero">
          <div className="hero-body">
            <div className="container">
              <div className="title has-text-centered">
                Get In Touch With Us
              </div>

              <div className="level">
              <div className="level-item has-text-centered">
                <div>
                  <img className="image" src={office} />
                  <p className="title is-4">Our Office </p>
                  <p className="heading">D.N Nagar, Andheri West, Mumbai</p>
                </div>
              </div>
              <div className="level-item has-text-centered">
                <div>
                  <img className="image" src={phone} />
                  <p className="title is-4">Phone No</p>
                  <p className="heading">D.N Nagar, Andheri West, Mumbai</p>
                </div>
              </div>
              <div className="level-item has-text-centered">
                <div>
                  <img className="image" src={queries} />
                  <p className="title is-4">Queries</p>
                  <p className="heading">D.N Nagar, Andheri West, Mumbai</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>

      <footer className="footer has-background-black">
        <div className="content has-text-centered">
          <p className="has-text-white">
            Made with  <span> <i className="fas fa-heart"></i> </span> by <strong style={{color:`white`}}>Rewind</strong>
          </p>
        </div>
      </footer>

    </section>

      </Fragment>
    );
  }
}

export default Landing;
