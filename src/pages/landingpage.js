import React from 'react';
import { useAuthenticator  } from '@aws-amplify/ui-react'

import '../App.css';


function LandingPage() {

  const { signOut, user } = useAuthenticator();

  return (
      <div className="App">
        <header className="App-header">
          <h1>Panneau administrateur</h1>
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
          <button className={'sign-out'} onClick={signOut}>Sign out</button>
        </header>
      </div>
  );
}

export default LandingPage;