import React, { useEffect } from "react";
import styles from './Delivery.module.css';
import { Link } from "react-router-dom";

export const Delivery = ({ showNavigationAndFooter }) => {

    useEffect(() => {
        showNavigationAndFooter();
    }, [showNavigationAndFooter]);

    return (
        <div className={styles['delivery-site']}>
            <div className={styles.container}>
                <h3 className={styles['delivery-title']}>Доставка и плащане</h3>
                <div className={styles['delivery-region']}>
                    <h6>Райони за доставкa</h6>
                    <p>Доставките на стоки, поръчани чрез сайта на VANIMI се извършват само на територията на гр.Русе, в
                        описаните по-долу райони:
                    </p>
                    <p><i className="fa-solid fa-circle"></i>Център</p>
                    <p><i className="fa-solid fa-circle"></i>кв. Възраждане</p>
                    <p><i className="fa-solid fa-circle"></i>кв. Здравец</p>
                    <p><i className="fa-solid fa-circle"></i>кв. Родина</p>
                    <p><i className="fa-solid fa-circle"></i>кв. Локомотив</p>
                    <p><i className="fa-solid fa-circle"></i>кв. Дружба-1</p>
                    <p><i className="fa-solid fa-circle"></i>кв. Дружба-2</p>
                    <p><i className="fa-solid fa-circle"></i>кв. Дружба-3</p>
                    <p><i className="fa-solid fa-circle"></i>кв. Гарата</p>
                    <p><i className="fa-solid fa-circle"></i>кв. Чародейка-1</p>
                    <p><i className="fa-solid fa-circle"></i>кв. Чародейка-2</p>
                    <p>В случай, че желаете да направите поръчка с доставка до адрес, който не попада в нашите райони за
                        доставка, но е в близост до някой от тях, молим да се свържете с нас.
                        Ние доставяме поръчаните стоки до посочен адрес, чрез собствен лекотоварен автомобил,
                        регистриран в БАБХ (Българска Агенция по Безопасност на Храните).
                    </p>
                </div>
                <div className={styles['delivery-price']}>
                    <h6>Цени за доставкa</h6>
                    <p><i className="fa-solid fa-circle"></i><span>6,90 лв.</span> – за доставки на всички <span
                        id="delivery-price-span">хранителни и
                        нехранителни стоки и напитки</span> от онлайн супермаркет VANIMI</p>
                    <p><i className="fa-solid fa-circle"></i><span>7,90 лв.</span> - за <span
                        id="delivery-price-span">ЕКСПРЕСНА ДОСТАВКА</span> /до
                        10 артикула/
                        в рамките на 30 мин. - за да извършим експресна доставка, е необходимо да се свържете с нас или
                        да напишете коментар към поръчката, за да потвърдим дали имаме възможност да Ви обслужим с
                        приоритет.
                    </p>
                    <p><i className="fa-solid fa-circle"></i><span>БЕЗПЛАТНА ДОСТАВКА</span> - защо не предлагаме над
                        определена сума? - <Link to="/price-politic">ТУК</Link> има повече информация за нашата <Link to="/price-politic">Ценова политика
                            "ПРОЗРАЧНОСТ"</Link>.
                    </p>
                </div>
                <div className={styles['delivery-hour']}>
                    <h6>Часове за доставка</h6>
                    <p><i className="fa-solid fa-circle"></i>часови интервали /слотове/ за доставки на <span
                        id="delivery-hour-span">хранителни и
                        нехранителни стоки и напитки</span> от магазин VANIMI
                    </p>
                    <p>ПОНЕДЕЛНИК - ПЕТЪК от 13:00 ч. до 20:00 ч. </p>
                    <p>На този етап извършваме доставките в посочените дни и часове. В случай, че добавим нови часови
                        интервали, ще съобщим своевременно.
                        Изборът на свободен часови интервал за доставка се прави преди приключване на поръчката!</p>
                </div>
                <div className={styles['delivery-payment']}>
                    <h6>Начини на плащане</h6>
                    <p>Приемаме плащания по следните начини:</p>
                    <p><i className="fa-solid fa-circle"></i>В брой - при получаване на стоката на посочения адрес за
                        доставка.</p>
                    <p><i className="fa-solid fa-circle"></i>Чрез мобилен ПОС при получаване - с кредитни карти Visa и
                        MasterCard, както и с дебитни карти Visa Electron, Maestro и Borica</p>
                    <p><i className="fa-solid fa-circle"></i>Банков превод - чрез превод по посочената по-долу банкова
                        сметка:</p>
                    <ul>
                        <li>IBAN:<span>XXXXXXXXXXXXXXXXXX</span></li>
                        <li>BIC:<span>XXXXXXXXXXXXXXXXXX</span></li>
                        <li>Банка:<span>XXXXXXXXXXXXXXXXXX</span></li>
                        <li> Получател:<span>XXXXXXXXXXXXXXXXXX</span></li>
                    </ul>
                    <p>* При банкови транзакции от чужбина, таксата за превод на дължимата сума е за Ваша сметка.</p>
                    <p>** При плащане чрез банков превод, доставката се извършва СЛЕД получаване на сумата в банковата
                        сметка. В този случай срокът за доставка започва да тече от датата на
                        постъпването на сумата на поръчката в нашата банкова сметка.
                    </p>
                </div>
            </div>
        </div>
    )
}