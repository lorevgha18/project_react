import React from "react";
import './GetStarted.css';

const GetStarted = () => {
    return (
        <section className="g-wrapper">
            <div className="paddings innerWidth g-container">
                <div className="flexColCenter inner-container">
                    <span className="primaryText">Get Started with Mario</span>
                    <span className="secondaryText">
                        Subscribe and find super attractive price quotes from Mario's
                        <br />
                        Find your residence soon
                    </span>

                    <div className="button-wrapper">
                        <a href="mailto:marioregalagulane@gmail.com" className="get-started-button">
                            Get Started
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetStarted;
