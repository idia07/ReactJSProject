import React from 'react';

import logo from './image/lolo.png';

function Formation() {
    return (
        <div className="container info">
            <h1>Formation</h1>
            <div className="row">
                <div className="col-md-6">
                    <div className="jumbotron">
                        <h3 className="display-4">Université de Bordeaux</h3>
                        <p>UFR Science et Technologie</p>
                        <img className="logo" src={logo} alt="logo diplome" />
                        <p className="lead">Master Développement Logiciel</p>
                        <hr className="my-4" />
                        <h3>2020-2021</h3>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="jumbotron">
                        <h3 className="display-4">Université de Bordeaux</h3>
                        <p>UFR Science et Technologie</p>
                        <img className="logo" src={logo} alt="logo diplome" />
                        <p className="lead">Licence Informatique</p>
                        <hr className="my-4" />
                        <h3>2018-2020</h3>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="jumbotron">
                        <h3 className="display-4">Université Barack Obama</h3>
                        <p>Département Informatique</p>
                        <img className="logo" src={logo} alt="logo diplome" />
                        <p className="lead">Génie Informatique</p>
                        <hr className="my-4" />
                        <h3>2015-2018</h3>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="jumbotron">
                        <h3 className="display-4">Lycée Amilcar Cabral</h3>
                        <p>Science Mathématiques</p>
                        <img className="logo" src={logo} alt="logo diplome" />
                        <p className="lead">Baccalauréat S</p>
                        <hr className="my-4" />
                        <h3>2012-2015</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Formation;
