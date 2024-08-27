import React, { useEffect } from "react";
import styles from './Contacts.module.css';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
    width: '850px',
    height: '400px'
};

const center = {
    lat: 43.858140,
    lng: 25.968168
};

export const Contacts = ({ showNavigationAndFooter }) => {

    useEffect(() => {
        showNavigationAndFooter();
    }, [showNavigationAndFooter]);

    return (

        <div className={styles.contacts}>
            <div className={styles.container}>

                <div className={styles['contacts-info']}>
                    <h3>Намерете ни</h3>
                    <p>Онлайн супермаркет VANIMI</p>
                    <p><i className="fa-solid fa-location-dot"></i>Адрес</p>
                    <p>Русе, Възраждане, ул. Алей Възраждане 32</p>
                    <p><i className="fa-solid fa-phone"></i>Връзка с нас</p>
                    <div className={styles['contacts-contact-info']}>
                        <p>0885585800</p>
                        <p>mihaildonchev88@gmail.com</p>
                    </div>
                    <p><i className="fa-solid fa-clock"></i>Работно време</p>
                    <div className={styles['contacts-time-info']}>
                        <p>Отговаряме на телефонни обаждания:</p>
                        <p>понеделник - петък</p>
                        <p>8:30 ч.- 17:30 ч.</p>
                    </div>
                </div>

                <div className={styles['contacts-img']}>
                    <LoadScript googleMapsApiKey="AIzaSyDutcVa3bYjuGM7amlFDlwQsa48RsE1kdA">
                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={center}
                            zoom={10}
                        >
                        </GoogleMap>
                    </LoadScript>
                    {/* <img src="./public/images/Screenshot (109).png" alt="" /> */}
                </div>

                {/* <div className="contact-developer-info">
                        <div className="dev-info">
                            <h5>Junior Web Developer</h5>
                            <p><i className="fa-solid fa-phone"></i>0885585800</p>
                            <p><i className="fa-solid fa-envelope"></i>mihaildonchev88@gmail.com</p>
                            <p><i className="fa-solid fa-globe"></i><a href="https://madnmd.github.io/My-Portfolio.github.io/">Portfolio</a></p>
                            <p><i className="fa-brands fa-github"></i><a href="https://github.com/MADNMD">GitHub</a></p>
                            <p><i className="fa-brands fa-linkedin"></i><a href="https://www.linkedin.com/in/mihail-donchev-6a400025a/">LinkedIn</a></p>

                        </div>
                        <div className="dev-info-img">
                            <p>MIHAIL DONCHEV</p>
                            <img src="./images/mishoGot.jpg" alt="" />
                        </div>
                    </div>  */}

            </div>
        </div>
    )
}