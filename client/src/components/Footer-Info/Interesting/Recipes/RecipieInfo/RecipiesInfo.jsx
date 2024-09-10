import React from "react";
import styles from './RecipiesInfo.module.css';
import { useParams } from "react-router-dom";
import { FaCookie, FaClipboardList } from "react-icons/fa";
import { IoCheckmarkCircle } from "react-icons/io5";

export const RecipeInfo = ({ recipes, recipeIdParam }) => {

    const { [recipeIdParam]: recipeId } = useParams();  // динамично вземане на параметъра от URL

    const recipe = recipes.filter(item => item.id === Number(recipeId));

    return (
        <div className={styles['recipies-info-container']}>
            {recipe.map(recipeInfo => (
                <React.Fragment key={recipeInfo.id}>

                    <h2>{recipeInfo.title}</h2>

                    <div className={styles['recipies-info-wrapper']}>
                        <div className={styles['recipies-info-img']}>
                            <img src={recipeInfo.image} alt={recipeInfo.title} />
                        </div>

                        <div className={styles.products}>
                            <h4><FaCookie /> Необходими съставки:</h4>
                            <div className={styles['products-col']}>
                                {recipeInfo.products.map(product => (
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
                        <p>{recipeInfo.recipies.introduction}</p>
                        <hr />
                        <p className={styles.steps}><span className={styles['recipies-steps']}>1</span>{recipeInfo.recipies.step1}</p>
                        <hr />
                        <p className={styles.steps}><span className={styles['recipies-steps']}>2</span>{recipeInfo.recipies.step2}</p>
                        <hr />
                        <p className={styles.steps}><span className={styles['recipies-steps']}>3</span>{recipeInfo.recipies.step3}</p>
                        <hr />
                        <p>Рецептата за {recipeInfo.title} е изпълнена.</p>
                        <p>ДОБЪР АПЕТИТ!</p>
                    </div>

                </React.Fragment>
            ))}
        </div>
    );
};
