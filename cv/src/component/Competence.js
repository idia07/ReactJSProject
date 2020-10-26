import React from 'react';

function Competence() {
    const Compet = [
        {
            title: 'Php',
            value: '80'
        },
        {
            title: 'Html',
            value: '90'
        },
        {
            title: 'Css',
            value: '70'
        },
        {
            title: 'JavaScript',
            value: '50'
        },
        {
            title: 'Bootstrap',
            value: '99'
        },
        {
            title: 'React',
            value: '50'
        },
        {
            title: 'Git',
            value: '70'
        },
        {
            title: 'NetBeans',
            value: '80'
        }

    ];
    const Compet2 = [
        {
            title: 'TypeScript',
            value: '60'
        },
        {
            title: 'Java SE',
            value: '85'
        },
        {
            title: 'Python',
            value: '50'
        },
        {
            title: 'Ocaml',
            value: '60'
        },
        {
            title: 'SQL/MySql',
            value: '75'
        },
        {
            title: 'Django',
            value: '40'
        },
        {
            title: 'phpMyadmin',
            value: '90'
        },
        {
            title: 'Latex',
            value: '50'
        }

    ]
    return (
        <div className="container info">
            <h1>Competence</h1>
            <div className="row">
                <div className="col-md-6">
                    {
                        Compet.map((competence,index) => {
                            return(
                                <>
                                <div class="progress">
                                    <div key={index} className="progress-bar progress-bar-striped" role="progressbar" style={{width: competence.value+'%'}} aria-valuenow={competence.value} aria-valuemin="0" aria-valuemax="100">{`${competence.title}  ${competence.value}% `}</div>
                                </div> <br />
                                </>
                            )
                        })
                    } 
                </div>
                <div className="col-md-6">
                    {
                        Compet2.map((competence,index) => {
                            return(
                                <>
                                <div class="progress">
                                    <div key={index} className="progress-bar progress-bar-striped" role="progressbar" style={{width: competence.value+'%'}} aria-valuenow={competence.value} aria-valuemin="0" aria-valuemax="100">{`${competence.title}  ${competence.value}% `}</div>
                                </div> <br />
                                </>
                            )
                        })
                    } 
                </div>
            </div>
        </div>
    )
}

export default Competence;
