import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <section className="f-wrapper">
            <div className="paddings innerWidth flexCenter f-container">
                {/* left */}
                <div className="flexColStart f-left">
                    <img src="/light(2).png" alt="" width={120} />

                    <span className="secodaryText">
                        Our vision is to make all people <br />
                        the best place to live for them
                    </span>
                </div>

                <div className="flexColStart f-right">
                    <span className='primaryText'>Information</span>
                    <span className='secondaryText'>6538, Palompon, Leyte</span>

                    <div className="flexCenter f-menu">
                        <span>Projects</span>
                        <span>About</span>
                        <span>Portfolio</span>
                        <span>Contact</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer