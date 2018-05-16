import React from 'react';

import './HomePage.css'

const HomePage = props => {
    return (

        <div className=''>
            <style> {'body { background-color: #B4CFEC; }'}</style>

        <div className="container">
            <div className="containerItem landing-page-container">


                <div className="contentWrapper">
                    <header className="header">
                        <div className="logo">
                            <span className="letter letter-1">S</span>
                            <span className="letter letter-2">q</span>
                            <span className="letter letter-3">u</span>
                            <span className="letter letter-4">o</span>
                            <span className="letter letter-5">n</span>
                            <span className="letter letter-6">k</span>
                        </div>
                    </header>
                    <div className="ellipses-container">
                        <h2 className="greeting">Budgeting made Social</h2>
                        <div className="ellipses ellipsesOuterThin">
                            <div className="ellipses ellipsesOrbit"></div>
                        </div>
                        <div className="ellipses ellipsesOuterThick"></div>
                    </div>

                    <div className="scroller">
                        <a href="/login" title="login" onClick={(event)=>props.handleClick(event)}> <p className="page-title">GET STARTED</p> </a>
                        <div className="timeline">
                            <span className="timelineUnit"></span>
                            <span className="timelineUnit timelineUnitActive"></span>
                            <span className="timelineUnit"></span>
                        </div>
                    </div>
                </div>

            </div>
            </div>
        </div>
    )
}
export default HomePage;
