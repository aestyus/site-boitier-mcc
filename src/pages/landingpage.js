import React from 'react';
import { useAuthenticator  } from '@aws-amplify/ui-react'

import '../App.css';


function LandingPage() {

  const openDownloadsFolder = () => {
    // Ouvrir un lien vers le dossier de téléchargements
    window.open('file:///C:/Users/chard/Downloads');
  };

  const { signOut, user } = useAuthenticator();

  return (
      <div className="App">
        <header className="App-header">
          <h1>Interface d'utilisation du boitier</h1>
          <p>Tu est connecté à un compte {user.attributes.nickname}</p>
          <p className="infos-de-connexion">Informations de connexion</p>
          <div className={'attributeContainer'}>
            <div className={'field'}>
                <p>email : </p>
                <p className={'attribute'}>{user.attributes.email}</p>    
            </div>
            <div className={'field'}>
                <p>nom : </p>
                <p className={'attribute'}>{user.attributes.family_name}</p>    
            </div>
            <div className={'field'}>
                <p>prénom : </p>
                <p className={'attribute'}>{user.attributes.name}</p>    
            </div>
            <div className={'field'}>
                <p>genre : </p>
                <p className={'attribute'}>{user.attributes.gender}</p>    
            </div>
            <div className={'field'}>
                <p>date d'anniversaire : </p>
                <p className={'attribute'}>{user.attributes.birthdate}</p>    
            </div>
            <div className={'field'}>
                <p>statut (nickname) : </p>
                <p className={'attribute'}>{user.attributes.nickname}</p>    
            </div>
          </div>
          <button className={'sign-out-button'} onClick={signOut}>Sign out</button>
        </header>

        <div className="App-consignes">
          <h1>Suivez les étapes suivantes afin de recharger votre boitier</h1>
          <div className={'tutoContainer'}>
            <div className={'tutoSubContainer'}>
                <p className={'tutoNumber'}>1 </p>
                <p className={'tutoText'}>Eteignez votre boitier en basculant l'intérrupteur sur OFF</p>    
            </div>
            <div className={'tutoSubContainer'}>
                <p className={'tutoNumber'}>2 </p>
                <p className={'tutoText'}>Branchez le boitier à l'ordinateur grâce au cable prévu à cet effet</p>    
            </div>
            <div className={'tutoSubContainer'}>
                <p className={'tutoNumber'}>3 </p>
                <p className={'tutoText'}>Appuyez sur le boutton ci-dessous</p>
                <div className={'divButton'}>
                  <button className={'charger-button'} onClick={openDownloadsFolder}>Charger !</button>
                </div>
    
            </div>
          </div>
        </div>
      </div>
  );
}

export default LandingPage;