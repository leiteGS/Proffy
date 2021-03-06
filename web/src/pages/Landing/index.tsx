import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
//style
import './styles.css'
//images
import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

//api backend
import api from '../../services/api';

function Landing() {
    const [connections, setConnections] = useState(0)

    useEffect(() => {
        api.get('connections').then(response => {
            const {total} = response.data;

            setConnections(total)
        })
    }, [])


    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="logo" />
                    <h2>Sua plataforma de estudos online.</h2>
                </div>

                <img src={landingImg} alt="plataforma de estudos" className="hero-image" />
                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="estudar" />
                        Estudar
                    </Link>
                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClassesIcon} alt="Dar aulas" />
                        Dar aulas
                    </Link>
                </div>
                <span className="total-connections">
                    total de {connections} conexões já realizadas

                    <img src={purpleHeartIcon} alt="coração roxo" />
                </span>
            </div>
        </div>
    )
}

export default Landing; 