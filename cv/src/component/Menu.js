import React, { Component } from 'react';

import {
  Link,
  NavLink,
} from 'react-router-dom';

class Menu extends Component {
    
    render() {
        const Items = [
            // {
            //     title: 'Acceuil',
            //     to: '/'
            // },
            {
                title: 'Formation',
                to: '/formation'
            },
            {
                title: 'Projet Réalisé',
                to: '/projet'
            },
            {
                title: 'Expériences professionnelles',
                to: '/experience'
            },
            {
                title: 'Compétence',
                to: '/competence'
            }
        
        
        ];

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">Acceuil</Link>
                <button className="navbar-toggler" type="button" dataToggle="collapse" dataTarget="#navbarNav" ariaControls="navbarNav" ariaExpanded="false" ariaLabel="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        {
                            Items.map((item,index) =>{ 
                                return(
                                    <li className="nav-item ">
                                        <NavLink key={index} className="nav-link" to={item.to}>{item.title}</NavLink>
                                    </li> 
                                    )
                            })
                        }
                    </ul>
                </div>
            </nav>
        )
    }
}
export default Menu;
