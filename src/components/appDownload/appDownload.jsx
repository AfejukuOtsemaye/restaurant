import React from 'react'
import './appDownload.css';
import { Assets } from '../../assets/assets';

export const AppDownload = () => {
  return (
    <div className='App-Download' id='App-Download'>
        <p>
          For Better Experience Download <br/> Restaurent App
        </p>
        <div className="appDownload-platforms">
            <img src={Assets.playStore} alt="Download the app on play-Store" />
            <img src={Assets.appStore} alt="Download the app on app-Store" />

        </div>
    </div>
  )
}

