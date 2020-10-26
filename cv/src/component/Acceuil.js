import React from 'react';

import cv from './Docs/CV.pdf';
import logo from './image/img.png';

function Acceuil() {
    return (
            <div className="container info ">
                <div className="row ">
                    <div className="col-md-4 "></div>
                    <div className="col-md-6 ">
                        <div className="card" style={{width: '25rem'}}>
                            <img className="img-fluid rounded  img-thumbnail" src={logo} alt="Responsive images"/>
                            <div className="card-body">
                                <h2 className="card-title">Mohamed Diallo</h2>
                                <p className="card-text">Alternance une semaine de formation et trois semaines en entreprise</p>
                                <h2>Développeur Web</h2>
                                <a href={cv} download={cv}>
                                    <button className="btn btn-outline-dark">Télécharger CV</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 "></div>
                </div>
                



            {/* <div className="row ">
                <div className="col-md-6 ">
                <img src={logo} alt="images" /><br />
                <h2>Mohamed Diallo</h2>
                <a href={cv} download={cv}>
                    <button className="btn btn-outline-dark">Télécharger CV</button>
                </a>
                </div>
                <div className="col-md-6">
                <h1>Développeur Web</h1><br />
                    <h5>Alternance une semaine de formation et trois semaines en entreprise</h5>
                </div>
            </div> */}
            </div>
    )
}

export default Acceuil;
