import React, { Component } from 'react';
import Slider from "react-slick";

// import './style.css';
import './test.css';


class Carousel extends Component {
    
    render() {
        return (
            <div id="carouselExampleIndicators" className="carousel slide " data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="bullet active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1" className="bullet"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2" className="bullet"></li>
                </ol>
                <div className="carousel-inner" role="listbox" >
                    <div className="carousel-item active csitem" style={{
                        backgroundImage: `url(http://longwallpapers.com/Desktop-Wallpaper/landscape-images-For-Desktop-Wallpaper.png)`,
                        backgroundSize: "cover",
                        backgroundPosition:"center"
                    }}>
                        {/* <img className="first-slide " src="http://getwallpapers.com/wallpaper/full/7/f/9/588657.jpg" alt="First slide" width="100%" /> */}
                        <div className="container">
                            <div className="carousel-caption text-left">
                                <h1>Example headline.</h1>
                                <p>Cras justo odio</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item  csitem" style={{
                        backgroundImage: `url(https://images4.alphacoders.com/556/556770.png)`,
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}>
                        {/* <img className="second-slide " src="http://getwallpapers.com/wallpaper/full/7/f/9/588657.jpg" alt="Second slide" width="100%"/> */}
                        <div className="container">
                            <div className="carousel-caption">
                                <h1>Another example headline.</h1>
                                <p>Cras justo odio</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item  csitem" style={{
                        backgroundImage: `url(http://s1.picswalls.com/wallpapers/2014/08/08/free-norwegian-nature-wallpaper_01573730_151.jpg)`,
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}>
                        {/* <img className="third-slide" src="http://getwallpapers.com/wallpaper/full/7/f/9/588657.jpg" alt="Third slide" width="100%"/> */}
                        <div className="container">
                            <div className="carousel-caption text-right">
                                <h1>One more for good measure.</h1>
                                <p>Cras justo odio, </p>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        );
    }
}

export default Carousel;