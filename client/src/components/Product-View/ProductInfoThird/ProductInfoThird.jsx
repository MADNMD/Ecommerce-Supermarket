import React, { useEffect } from "react";
import styles from './ProductInfoThird.module.css';
import { Link } from "react-router-dom";

export const ProductInfoThird = ({ showNavigationAndFooter }) => {

    useEffect(() => {
        showNavigationAndFooter();
    }, [showNavigationAndFooter]);

    return (

        <div className={styles['productFavInfo']}>
            <div className={styles.container}>

                <div className={styles['info-content1']}>
                    <div className={styles['productFavInfo-img-content']}>
                        <div className={styles['productFavInfo-img']}>
                            <img src="./images/fruitAndVeg/nuts/kashu.jpg" alt="" />
                        </div>
                        <div className={styles['productFavInfo-content-info']}>
                            <p>* Снимката е илюстративна</p>
                            <p>** Таксуването на меримите стоки се извършва по реално доставеното количество</p>
                        </div>
                    </div>
                    <div className={styles['productFavInfo-content']}>
                        <h4>БИО КАШУui "Био Класа" 200г</h4>
                        <p className={styles.brand}>Марка: <span>БИО КЛАСА</span></p>
                        <div className={styles['productFavInfo-price']}>
                            <p>Цена:</p>
                            <p>9.79лв</p>
                        </div>
                        <div className={styles['count-option-favInfo']}>
                            <div className={styles['count-option3']}>
                                <select name="weight-option">
                                    <option value="500">200г</option>
                                    <option value="1">400г</option>
                                    <option value="1">600г</option>
                                </select>
                            </div>

                            <div className={styles['order-product-favInfo']}>
                                <Link to=""><i className="fa-solid fa-cart-shopping"></i>ДОБАВИ</Link>
                            </div>
                        </div>

                        <h6>ХАРАКТЕРИСТИКИ</h6>
                        <p className={styles['productInfo-category']}>Категория: <Link to="/nuts">Ядки и семена</Link></p>
                        <h6>ОПИСАНИЕ</h6>
                        <p className={styles['productInfo-description']}>Кашуто ни е познато като ядка,но всъщност е костилка на така нареченото кашу - ябълка
                            растяща в Индия. Тя има формата на бъбрек и първа израства на дървото,след което от
                            дръжката му и се формира ябълка. В плода има едно единствено семе и всички го наричат
                            кашу. Месестата част на ябълката също се консумира,но бързо се разваля и поради тази
                            причина до нас достигат само вкусни костилки кашу.

                            Кашуто освен с невероятен вкус е богато на витамина A, B1, B2, B6, B9, съдържа
                            белтъчини, въглехидрати, желязо, селен, магнезий, фосфор, цинк и мед. Кашуто е ценно в
                            различни хранителни режими, зради ниския си гликемичен индекс, което го превръща в
                            перфектен източник на бавни въглехидрати.
                        </p>
                    </div>
                </div>

                <div className={styles['info-content2']}>
                    <p><i className="fa-regular fa-money-bill-1"></i><Link to="/price-politic">Без увеличение на цените в онлайн магазина - виж тук.</Link></p>
                    <p><i className="fa-solid fa-circle-info"></i>Провери цените за доставка <Link to="/delivery">тук</Link></p>
                    <p><i className="fa-solid fa-circle-question"></i>Провери дните и часовете за доставка <Link to="/delivery">тук</Link></p>
                </div>

            </div>
        </div>
    )
}