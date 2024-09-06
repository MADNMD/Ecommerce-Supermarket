import React from "react";
import styles from '../../RecipiesInfo.module.css';
import { useParams } from "react-router-dom";
import { FaCookie, FaClipboardList } from "react-icons/fa";
import { IoCheckmarkCircle } from "react-icons/io5";

import soupsRecipies from '../recipies.json';

export const SoupsInfo = () => {

    const id = useParams();

    const soup = soupsRecipies.filter(soup => soup.id === Number(id.soupId));

    return (

        <div className={styles['recipies-info-container']}>
            {soup.map(soupInfo => (
                <React.Fragment key={soupInfo.id}>

                    <h2>{soupInfo.title}</h2>

                    <div className={styles['recipies-info-wrapper']}>
                        <div className={styles['recipies-info-img']}>
                            <img src={soupInfo.image} alt={soupInfo.title} />
                        </div>

                        <div className={styles.products}>
                            <h4><FaCookie /> Необходими съставки:</h4>
                            <div className={styles['products-col']}>
                                {soupInfo.products.map(product => (
                                    <div key={product.id} className={styles.product}>
                                        <IoCheckmarkCircle style={{ color: "rgba(0, 31, 61, 1)", width: "1.5em", height: "1.5em" }} />
                                        <p className={styles['product-name']}>{product.name} - {product.quantity}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <h4><FaClipboardList /> Рецептата:</h4>

                    <div className={styles['recipies-content']}>
                        <p>{soupInfo.recipies.introduction}</p>
                        <hr />
                        <p className={styles.steps}><span className={styles['recipies-steps']}>1</span>{soupInfo.recipies.step1}</p>
                        <hr />
                        <p className={styles.steps}><span className={styles['recipies-steps']}>2</span>{soupInfo.recipies.step2}</p>
                        <hr />
                        <p className={styles.steps}><span className={styles['recipies-steps']}>3</span>{soupInfo.recipies.step3}</p>
                        <hr />
                        <p>Рецептата за {soupInfo.title} е изпълнена.</p>
                        <p>ДОБЪР АПЕТИТ!</p>
                    </div>

                </React.Fragment>
            ))}
        </div>

    )
}