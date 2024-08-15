import React, { useEffect, useState } from "react";
import styles from './Favorite.module.css';
import { Link } from "react-router-dom";
import PacmanLoader from "react-spinners/PacmanLoader";

import * as profileService from '../../../services/profileService';
import { useAuthContext } from "../../../contexts/authContext";
import { FavoriteItem } from "./FavoriteItem";
import { FavoriteSecondItem } from "./FavoriteSecondItem";
import { FavoriteThirdItem } from "./FavoriteThirdItem";

export const Favorite = ({ showNavigationAndFooter }) => {

    useEffect(() => {
        showNavigationAndFooter();
    }, [showNavigationAndFooter]);

    const { userId } = useAuthContext();
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(false);
    const [color, setColor] = useState('rgba(239, 133, 53, 1)');

    useEffect(() => {
        setLoading(true);
        profileService.getUser(userId)
            .then(profile => {
                setUser(profile);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
            })
    }, [userId]);

    const handleRemoveProductFromFavoriteList = (productId) => {
        setUser((prevUser) => {
            const updatedFavorites = prevUser.favorites.filter(p => p._id !== productId);
            return { ...prevUser, favorites: updatedFavorites };
        });
    };

    const cssLoader = {
        display: "block",
        margin: "270px auto 0 auto",
    };

    return (

        <div className={styles.favorite}>
            <div className={styles.container}>
                <div className={styles['favorite-main-content']}>

                    <div className={styles['mini-nav']}>
                        <Link to="/user/order">Моите поръчки</Link>
                        <Link to="/user/favorites">Любими продукти</Link>
                        <Link to="/user/profile">Моите данни</Link>
                        <Link to="/user/logout">Изход</Link>
                    </div>

                    <div className={styles['favorite-content']}>

                        <h3>Любими продукти</h3>

                        <div className={styles.cards}>

                            {loading ? (
                                <PacmanLoader
                                    color={color}
                                    cssOverride={cssLoader}
                                    size={70}
                                />
                            ) : (
                                user.favorites?.length === 0 ? (
                                    <p>Все още нямате добавени любими продукти!</p>
                                ) : (
                                    user.favorites?.map(product => {
                                        let cardComponent;

                                        switch (true) {
                                            case product.productQuantity === 0:
                                                cardComponent = <FavoriteThirdItem product={product} onRemoveFavorite={handleRemoveProductFromFavoriteList} />
                                                break;
                                            case product.unitsKilogram === 'Кг':
                                                cardComponent = <FavoriteSecondItem product={product} onRemoveFavorite={handleRemoveProductFromFavoriteList} />
                                                break;
                                            case product.unitsKilogram === 'Бр':
                                                cardComponent = <FavoriteItem product={product} onRemoveFavorite={handleRemoveProductFromFavoriteList} />
                                                break;
                                        }
                                        return (
                                            <React.Fragment key={product._id}>{cardComponent}</React.Fragment>
                                        )
                                    })
                                )
                            )}

                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}

{/* <FavoriteItem key={product._id} product={product} onRemoveFavorite={handleRemoveProductFromFavoriteList} /> */ }