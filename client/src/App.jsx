import { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { Home } from "./components/Home";
import { Navigation } from "./components/Navigation";
import { Search } from './components/Search';
import { Footer } from "./components/Footer";
import { PricePolitic } from "./components/Footer-Info/PricePolitic";
import { Fruit, FruitAndVeg, Salad, Spices, Vegitables, Olives, Dried, Nuts } from "./components/Category-1";
import { MilkAndEgg, Milk, Yogurt, MilkDrink, Cheese, YellowCheese, Butter, PackedSalad, Egg } from "./components/Category-2";
import { Fish, Meat, MeatProducts, MeatAndFish, SushiAndFishProducts } from "./components/Category-3";
import { BreadAndPasta, Bread, PastaProducts, DoughProducts, FreshPasta, BaguettesAndTortillas } from './components/Category-4';
import { BreakfastCerealsCornflakesAndMuesli, ChipsAndSnacks, SaltyProducts, SweetAndSalty, SugarProducts } from './components/Category-5';
import { AlcoholDrink, CiderAndKombucha, EnergyDrinks, FreshJuicesAndSmoothies, SoftDrinks, Beer, Wine, Water, CoffeeAndTea, DrinksAndWater } from './components/Category-6';
import { BabyAndChildren, CosmeticProducts, DiapersAndWetWipes, FoodProducts, DrinkProducts, DetergentsAndFabricSofteners } from './components/Category-7';
import { CleaningPreparaions, ForHomeAndGarden, LaundryDetergents, PapersAndNapkins, CleaningProducts, Flavorings, ForHome } from './components/Category-8';
import { Accessories, CatFood, DogAndCat, DogFood, Treats } from './components/Category-9';
import { Login } from "./components/User/Login";
import { Register } from "./components/User/Register";
import { Logout } from "./components/User/Logout";
import { Order } from "./components/User/Order";
import { Favorite } from "./components/User/Favorite";
import { Profile } from "./components/User/Profile";
import { MyCart } from "./components/Cart/MyCart";
import { MyCartOrder } from "./components/Cart/MyCartOrder";
import { MyCartReadyOrder } from "./components/Cart/MyCartReadyOrder";
import { MyOrderNumber } from "./components/Cart/MyOrderNumber";
import { Delivery } from "./components/Footer-Info/Delivery";
import { Cookies } from "./components/Footer-Info/Cookies";
import { Contacts } from "./components/Footer-Info/Contacts";
import { Holiday } from "./components/Footer-Info/Holiday";
import { AdminPanel } from "./components/Admin/Admin-Panel";
import { AdminAddProduct } from "./components/Admin/Admin-AddProduct/AdminAddProduct";
import { AdminInvetory } from "./components/Admin/Admin-Inventory";
import { AdminOrders } from "./components/Admin/Admin-Orders";
import { AdminUsers } from "./components/Admin/Admin-Users";
import { ProductInfo } from "./components/Product-View/ProductInfo";
import { ProductInfoDiscount } from "./components/Product-View/ProductInfoDiscount";
import { ProductInfoExhausted } from "./components/Product-View/ProductInfoExhaused";
import { ProductInfoSecond } from "./components/Product-View/ProductInfoSecond";
import { AuthProvier } from "./contexts/authContext";
import { ProfileProvider } from "./contexts/profileContext";
import { CartProvider } from "./contexts/cartContext";
import { NotFound } from "./components/NotFound";
import { AdminGuards } from "./components/Guards/AdminGuards";
import { AuthGuards } from "./components/Guards/AuthGuards";
import { OrderGuards } from "./components/Guards/OrderGuards";
import { ScrollTop } from "./components/ScrollTop";
import { Interesting } from "./components/Footer-Info/Interesting";
import { SoupsInfo } from "./components/Footer-Info/Interesting/Recipes/Soups/SoupsInfo";
import { SoupRecipies } from "./components/Footer-Info/Interesting/Recipes/Soups/SoupRecipies";
import { SaladsInfo } from "./components/Footer-Info/Interesting/Recipes/Salads/SaladsInfo";
import { SaladRecipies } from "./components/Footer-Info/Interesting/Recipes/Salads/SaladRecipies";
import { LeanMealRecipies } from "./components/Footer-Info/Interesting/Recipes/LeanMeals";
import { LeanMealsInfo } from "./components/Footer-Info/Interesting/Recipes/LeanMeals/LeanMealsInfo";
import { MeatDishesRecipies } from "./components/Footer-Info/Interesting/Recipes/MeatDishes/MeatDishesRecipies";
import { MeatDishesInfo } from "./components/Footer-Info/Interesting/Recipes/MeatDishes/MeatDishesInfo";
import { DessertsInfo } from "./components/Footer-Info/Interesting/Recipes/Desserts/DessertsInfo";
import { DessertsRecipies } from "./components/Footer-Info/Interesting/Recipes/Desserts";
import { SmoothiesInfo } from "./components/Footer-Info/Interesting/Recipes/Smoothies/SmoothiesInfo";
import { SmoothRecipies } from "./components/Footer-Info/Interesting/Recipes/Smoothies";

function App() {

    const [showNavigation, setShowNavigation] = useState(true);
    const [showFooter, setShowFooter] = useState(true);

    const hideNavigationAndFooter = () => {
        setShowNavigation(false);
        setShowFooter(false);
    }

    const showNavigationAndFooter = () => {
        setShowNavigation(true);
        setShowFooter(true);
    }

    return (
        <AuthProvier>
            <ProfileProvider>
                <CartProvider>
                    <ToastContainer
                        position="top-center"
                        autoClose={3000}
                        closeOnClick={true}
                        draggable={true}
                        pauseOnHover={false}
                        hideProgressBar={true}
                    />
                    <ScrollTop />
                    <div className="site">
                        {showNavigation && <Navigation />}
                        <main className="site-main">

                            <Routes>
                                <Route path="/" element={<Home showNavigationAndFooter={showNavigationAndFooter} />} />

                                <Route path="/search" element={<Search showNavigationAndFooter={showNavigationAndFooter} />} />

                                <Route path="/user/login" element={<Login hideNavigationAndFooter={hideNavigationAndFooter} />} />
                                <Route path="/user/register" element={<Register hideNavigationAndFooter={hideNavigationAndFooter} />} />

                                <Route element={<AdminGuards />}>
                                    <Route path="/admin-panel" element={<AdminPanel showNavigationAndFooter={showNavigationAndFooter} />} />
                                    <Route path="/admin-add-product" element={<AdminAddProduct showNavigationAndFooter={showNavigationAndFooter} />} />
                                    <Route path="/admin-invetory" element={<AdminInvetory showNavigationAndFooter={showNavigationAndFooter} />} />
                                    <Route path="/admin-orders" element={<AdminOrders showNavigationAndFooter={showNavigationAndFooter} />} />
                                    <Route path="/admin-users" element={<AdminUsers showNavigationAndFooter={showNavigationAndFooter} />} />
                                    <Route element={<OrderGuards />}>
                                        <Route path="/my-order-number/:orderNumber" element={<MyOrderNumber hideNavigationAndFooter={hideNavigationAndFooter} />} />
                                    </Route>
                                </Route>

                                <Route element={<AuthGuards />}>
                                    <Route path="/user/logout" element={<Logout />} />

                                    <Route path="/user/order" element={<Order showNavigationAndFooter={showNavigationAndFooter} />} />
                                    <Route path="/user/favorites" element={<Favorite showNavigationAndFooter={showNavigationAndFooter} />} />
                                    <Route path="/user/profile/" element={<Profile showNavigationAndFooter={showNavigationAndFooter} />} />

                                    <Route path="/my-cart" element={<MyCart hideNavigationAndFooter={hideNavigationAndFooter} />} />
                                    <Route element={<OrderGuards />}>
                                        <Route path="/my-cart-order" element={<MyCartOrder hideNavigationAndFooter={hideNavigationAndFooter} />} />
                                        <Route path="/my-cart-ready-order" element={<MyCartReadyOrder hideNavigationAndFooter={hideNavigationAndFooter} />} />
                                        <Route path="/my-order-number/:orderNumber" element={<MyOrderNumber hideNavigationAndFooter={hideNavigationAndFooter} />} />
                                    </Route>

                                </Route>

                                <Route path="/fruits-and-vegs" element={<FruitAndVeg showNavigationAndFooter={showNavigationAndFooter} />} />
                                <Route path="/fruits" element={<Fruit showNavigationAndFooter={showNavigationAndFooter} />} />
                                <Route path="/vegitables" element={<Vegitables showNavigationAndFooter={showNavigationAndFooter} />} />
                                <Route path="/salads" element={<Salad showNavigationAndFooter={showNavigationAndFooter} />} />
                                <Route path="/spices" element={<Spices showNavigationAndFooter={showNavigationAndFooter} />} />
                                <Route path="/olives" element={<Olives showNavigationAndFooter={showNavigationAndFooter} />} />
                                <Route path="/dried" element={<Dried showNavigationAndFooter={showNavigationAndFooter} />} />
                                <Route path="/nuts" element={<Nuts showNavigationAndFooter={showNavigationAndFooter} />} />

                                <Route path="/milks-and-eggs" element={<MilkAndEgg showNavigationAndFooter={showNavigationAndFooter} />} />
                                <Route path="/milks" element={<Milk showNavigationAndFooter={showNavigationAndFooter} />} />
                                <Route path="/yogurts" element={<Yogurt showNavigationAndFooter={showNavigationAndFooter} />} />
                                <Route path="/milkDrinks" element={<MilkDrink showNavigationAndFooter={showNavigationAndFooter} />} />
                                <Route path="/cheeses" element={<Cheese showNavigationAndFooter={showNavigationAndFooter} />} />
                                <Route path="/yellowCheeses" element={<YellowCheese showNavigationAndFooter={showNavigationAndFooter} />} />
                                <Route path="/butters" element={<Butter showNavigationAndFooter={showNavigationAndFooter} />} />
                                <Route path="/packedSalads" element={<PackedSalad showNavigationAndFooter={showNavigationAndFooter} />} />
                                <Route path="/eggs" element={<Egg showNavigationAndFooter={showNavigationAndFooter} />} />

                                <Route path="/meat-and-fish" element={<MeatAndFish showNavigationAndFooter={showNavigationAndFooter} />} />
                                <Route path="/meat" element={<Meat showNavigationAndFooter={showNavigationAndFooter} />} />
                                <Route path="/meat-products" element={<MeatProducts showNavigationAndFooter={showNavigationAndFooter} />} />
                                <Route path="/fish" element={<Fish showNavigationAndFooter={showNavigationAndFooter} />} />
                                <Route path="/sushi-and-fish-products" element={<SushiAndFishProducts showNavigationAndFooter={showNavigationAndFooter} />} />

                                <Route path="/bread-and-pasta" element={<BreadAndPasta showNavigationAndFooter={showNavigationAndFooter} />} />
                                <Route path="/bread" element={<Bread showNavigationAndFooter={showNavigationAndFooter} />} />
                                <Route path="/pasta-product" element={<PastaProducts showNavigationAndFooter={showNavigationAndFooter} />} />
                                <Route path="/dough-product" element={<DoughProducts showNavigationAndFooter={showNavigationAndFooter} />} />
                                <Route path="/fresh-pasta" element={<FreshPasta showNavigationAndFooter={showNavigationAndFooter} />} />
                                <Route path="/baguettes-and-trotillas" element={<BaguettesAndTortillas showNavigationAndFooter={showNavigationAndFooter} />} />

                                <Route path="/sweet-and-salty" element={<SweetAndSalty showNavigationAndFooter={showNavigationAndFooter} />} />
                                <Route path="/sugar-products" element={<SugarProducts showNavigationAndFooter={showNavigationAndFooter} />} />
                                <Route path="/breakfast-cereals-cornflakes-and-muesli" element={<BreakfastCerealsCornflakesAndMuesli showNavigationAndFooter={showNavigationAndFooter} />} />
                                <Route path="/salty-products" element={<SaltyProducts showNavigationAndFooter={showNavigationAndFooter} />} />
                                <Route path="/chips-and-snacks" element={<ChipsAndSnacks showNavigationAndFooter={showNavigationAndFooter} />} />

                                <Route path="/drink-water" element={<DrinksAndWater showNavigationAndFooter={showNavigationAndFooter} />} />
                                <Route path="/coffee-and-tea" element={<CoffeeAndTea showNavigationAndFooter={showNavigationAndFooter} />} />
                                <Route path="/water" element={<Water showNavigationAndFooter={showNavigationAndFooter} />} />
                                <Route path="/fresh-and-smoothies" element={<FreshJuicesAndSmoothies showNavigationAndFooter={showNavigationAndFooter} />} />
                                <Route path="/soft-drink" element={<SoftDrinks showNavigationAndFooter={showNavigationAndFooter} />} />
                                <Route path="/energy-drink" element={<EnergyDrinks showNavigationAndFooter={showNavigationAndFooter} />} />
                                <Route path="/cider-and-kombucha" element={<CiderAndKombucha showNavigationAndFooter={showNavigationAndFooter} />} />
                                <Route path="/beer" element={<Beer showNavigationAndFooter={showNavigationAndFooter} />} />
                                <Route path="/wine" element={<Wine showNavigationAndFooter={showNavigationAndFooter} />} />
                                <Route path="/alcohol-drink" element={<AlcoholDrink showNavigationAndFooter={showNavigationAndFooter} />} />

                                <Route path="/baby-and-children-products" element={<BabyAndChildren showNavigationAndFooter={showNavigationAndFooter} />} />
                                <Route path="/baby-foods" element={<FoodProducts showNavigationAndFooter={showNavigationAndFooter} />} />
                                <Route path="/baby-drinks" element={<DrinkProducts showNavigationAndFooter={showNavigationAndFooter} />} />
                                <Route path="/baby-cosmetics" element={<CosmeticProducts showNavigationAndFooter={showNavigationAndFooter} />} />
                                <Route path="/diapers-and-wet-wipes" element={<DiapersAndWetWipes showNavigationAndFooter={showNavigationAndFooter} />} />
                                <Route path="/detergents-and-fabric-softeners" element={<DetergentsAndFabricSofteners showNavigationAndFooter={showNavigationAndFooter} />} />

                                <Route path="/for-home-and-garden-products" element={<ForHome showNavigationAndFooter={showNavigationAndFooter} />} />
                                <Route path="/laundry-detergents" element={<LaundryDetergents showNavigationAndFooter={showNavigationAndFooter} />} />
                                <Route path="/cleaning-preparations" element={<CleaningPreparaions showNavigationAndFooter={showNavigationAndFooter} />} />
                                <Route path="/papers-napkins-foils-envelopes" element={<PapersAndNapkins showNavigationAndFooter={showNavigationAndFooter} />} />
                                <Route path="/cleaning-products" element={<CleaningProducts showNavigationAndFooter={showNavigationAndFooter} />} />
                                <Route path="/air-fresheners-candles-insecticides" element={<Flavorings showNavigationAndFooter={showNavigationAndFooter} />} />
                                <Route path="/for-home-and-garden" element={<ForHomeAndGarden showNavigationAndFooter={showNavigationAndFooter} />} />

                                <Route path="/dog-and-cat-products" element={<DogAndCat showNavigationAndFooter={showNavigationAndFooter} />} />
                                <Route path="/dog-food" element={<DogFood showNavigationAndFooter={showNavigationAndFooter} />} />
                                <Route path="/cat-food" element={<CatFood showNavigationAndFooter={showNavigationAndFooter} />} />
                                <Route path="/treats" element={<Treats showNavigationAndFooter={showNavigationAndFooter} />} />
                                <Route path="/accessories" element={<Accessories showNavigationAndFooter={showNavigationAndFooter} />} />

                                <Route path="/product-info/:productId" element={<ProductInfo showNavigationAndFooter={showNavigationAndFooter} />} />
                                <Route path="/product-info-second/:productId" element={<ProductInfoSecond showNavigationAndFooter={showNavigationAndFooter} />} />
                                <Route path="/product-info-discount/:productId" element={<ProductInfoDiscount showNavigationAndFooter={showNavigationAndFooter} />} />
                                <Route path="/product-info-exhausted/:productId" element={<ProductInfoExhausted showNavigationAndFooter={showNavigationAndFooter} />} />

                                <Route path="/price-politic" element={<PricePolitic showNavigationAndFooter={showNavigationAndFooter} />} />
                                <Route path="/delivery" element={<Delivery showNavigationAndFooter={showNavigationAndFooter} />} />
                                <Route path="/cookies" element={<Cookies showNavigationAndFooter={showNavigationAndFooter} />} />
                                <Route path="/contacts" element={<Contacts showNavigationAndFooter={showNavigationAndFooter} />} />
                                <Route path="/holiday" element={<Holiday showNavigationAndFooter={showNavigationAndFooter} />} />
                                <Route path="/interesting" element={<Interesting showNavigationAndFooter={showNavigationAndFooter} />} />

                                <Route path="/interesting/soups-recipies" element={<SoupRecipies showNavigationAndFooter={showNavigationAndFooter} />} />
                                <Route path="/interesting/soups-recipies/:soupId" element={<SoupsInfo showNavigationAndFooter={showNavigationAndFooter} />} />

                                <Route path="/interesting/salads-recipies" element={<SaladRecipies showNavigationAndFooter={showNavigationAndFooter} />} />
                                <Route path="/interesting/salads-recipies/:saladId" element={<SaladsInfo showNavigationAndFooter={showNavigationAndFooter} />} />

                                <Route path="/interesting/lean-meals-recipies" element={<LeanMealRecipies showNavigationAndFooter={showNavigationAndFooter} />} />
                                <Route path="/interesting/lean-meals-recipies/:leanMealsId" element={<LeanMealsInfo showNavigationAndFooter={showNavigationAndFooter} />} />

                                <Route path="/interesting/meat-dishes-recipies" element={<MeatDishesRecipies showNavigationAndFooter={showNavigationAndFooter} />} />
                                <Route path="/interesting/meat-dishes-recipies/:meatDishesId" element={<MeatDishesInfo showNavigationAndFooter={showNavigationAndFooter} />} />

                                <Route path="/interesting/desserts-recipies" element={<DessertsRecipies showNavigationAndFooter={showNavigationAndFooter} />} />
                                <Route path="/interesting/desserts-recipies/:dessertId" element={<DessertsInfo showNavigationAndFooter={showNavigationAndFooter} />} />

                                <Route path="/interesting/smoothies-recipies" element={<SmoothRecipies showNavigationAndFooter={showNavigationAndFooter} />} />
                                <Route path="/interesting/smoothies-recipies/:smoothId" element={<SmoothiesInfo showNavigationAndFooter={showNavigationAndFooter} />} />

                                <Route path="*" element={<NotFound />} />

                            </Routes>

                        </main>
                        {showFooter && <Footer />}
                    </div>
                </CartProvider>
            </ProfileProvider>
        </AuthProvier>
    )
}

export default App
