import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import logements from '../data/logements.json';
import Carousel from '../components/carousel/carousel';
import { Layout } from '../components/layout';
import Collapse from '../components/collapse/collapse';
import { useNavigate } from 'react-router-dom';
import Tag from '../components/tag/tag';
import './ficheLogement.scss';

function FicheLogement() {
    const { id } = useParams();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [logement, setLogement] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const index = logements.findIndex(logement => logement.id === id);
        setCurrentIndex(index);
        setLogement(logements[index]);
    }, [id]);

    if (!logement) {
        navigate('/404')
    } else {
        const prevImg = () => {
            const newIndex = currentIndex === 0 ? logements.length - 1 : currentIndex - 1;
            setCurrentIndex(newIndex);
            setLogement(logements[newIndex]);
        };
    
        const nextImg = () => {
            const newIndex = currentIndex === logements.length - 1 ? 0 : currentIndex + 1;
            setCurrentIndex(newIndex);
            setLogement(logements[newIndex]);
        };
    
        return React.createElement(
            Layout,
            null,
            React.createElement(
                Carousel,
                {
                    currentIndex: currentIndex,
                    nextImg: nextImg,
                    prevImg: prevImg,
                    logement: logement,
                }
            ),
            React.createElement(
                'div',
                { className: 'fiche-logement-container' },
                React.createElement(
                    Collapse,
                    { title: 'Description' },
                    React.createElement('p', null, logement.description)
                ),
                React.createElement(
                    Collapse,
                    { title: 'Équipements' },
                    React.createElement(
                        'ul',
                        null,
                        logement.equipments.map((equip, index) =>
                            React.createElement('li', { key: index }, equip)
                        )
                    )
                )
            )
        );
    }

    
}

export default FicheLogement;
