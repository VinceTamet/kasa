import React from 'react';
import { Link } from 'react-router-dom';
import './errorPage.scss'; 
import { Layout } from '../../components/layout/layout';

export function ErrorPage() {
    return (
        <Layout>
        <div className="error-page">
            <h1 className="error-code">404</h1>
            <p className="error-message">Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className="home-link">Retourner sur la page d’accueil</Link>
        </div>
        </Layout>
    );
}
