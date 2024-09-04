import { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { Search } from './components/Search';
import { Footer } from "./components/Footer";
import { Fruit } from "./components/Category-1/Fruit";
import { FruitAndVeg } from "./components/Category-1/FruitAndVeg";
import { Home } from "./components/Home";
import { Navigation } from "./components/Navigation";
import { PricePolitic } from "./components/Footer-Info/PricePolitic";
import { Salad } from "./components/Category-1/Salad";
import { Spices } from "./components/Category-1/Spices";
import { Vegitables } from "./components/Category-1/Vegitables";
import { Olives } from "./components/Category-1/Olives";
import { Dried } from "./components/Category-1/Dried";
import { Nuts } from "./components/Category-1/Nuts";
import { MilkAndEgg } from "./components/Category-2/MilkAndEgg";
import { Milk } from "./components/Category-2/Milk";
import { Yogurt } from "./components/Category-2/Yogurt";
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
import { MeatAndFish } from "./components/Category-3/MeatAndFish/MeatAndFish";
import { AuthProvier } from "./contexts/authContext";
import { ProfileProvider } from "./contexts/profileContext";
import { MilkDrink } from "./components/Category-2/MilkDrink";
import { Cheese } from "./components/Category-2/Cheese";
import { YellowCheese } from "./components/Category-2/YellowCheese";
import { Butter } from "./components/Category-2/Butter";
import { PackedSalad } from "./components/Category-2/PackedSalad/PackedSalad";
import { Egg } from "./components/Category-2/Egg";
import { CartProvider } from "./contexts/cartContext";
import { Meat } from "./components/Category-3/Meat";
import { MeatProducts } from "./components/Category-3/MeatProducts";
import { Fish } from "./components/Category-3/Fish";
import { SushiAndFishProducts } from "./components/Category-3/SushiAndFishProducts";
import { BreadAndPasta } from "./components/Category-4/BreadAndPasta/BreadAndPasta";
import { Bread } from "./components/Category-4/Bread/Bread";
import { PastaProducts } from "./components/Category-4/PastaProducts/PastaProducts";
import { DoughProducts } from "./components/Category-4/DoughProducts/DoughProducts";
import { FreshPasta } from "./components/Category-4/FreshPasta/FreshPasta";
import { BaguettesAndTortillas } from "./components/Category-4/BaguettesAndTortillas/BaguettesAndTortillas";
import { SweetAndSalty } from "./components/Category-5/SweetAndSalty";
import { SugarProducts } from "./components/Category-5/SugarProducts";
import { BreakfastCerealsCornflakesAndMuesli } from "./components/Category-5/BreakfastCerealsCornflakesAndMuesli";
import { SaltyProducts } from "./components/Category-5/SaltyProducts";
import { ChipsAndSnacks } from "./components/Category-5/ChipsAndSnacks";
import { DrinksAndWater } from "./components/Category-6/DrinksAndWater";
import { CoffeeAndTea } from "./components/Category-6/CoffeeAndTea";
import { Water } from "./components/Category-6/Water";
import { FreshJuicesAndSmoothies } from "./components/Category-6/FreshJuicesAndSmoothies";
import { EnergyDrinks } from "./components/Category-6/EnergyDrinks";
import { CiderAndKombucha } from "./components/Category-6/CiderAndKombucha";
import { Beer } from "./components/Category-6/Beer";
import { Wine } from "./components/Category-6/Wine";
import { AlcoholDrink } from "./components/Category-6/AlcoholDrink";
import { SoftDrinks } from "./components/Category-6/SoftDrinks";
import { BabyAndChildren } from "./components/Category-7/BabyAndChildren";
import { FoodProducts } from "./components/Category-7/FoodProducts";
import { DrinkProducts } from "./components/Category-7/DrinkProducts";
import { DiapersAndWetWipes } from "./components/Category-7/DiapersAndWetWipes";
import { CosmeticProducts } from "./components/Category-7/CosmeticProducts";
import { DetergentsAndFabricSofteners } from "./components/Category-7/DetergentsAndFabricSofteners";
import { ForHomeAndGarden } from "./components/Category-8/ForHomeAndGarden";
import { ForHome } from "./components/Category-8/ForHome";
import { LaundryDetergents } from "./components/Category-8/LaundryDetergents";
import { CleaningPreparaions } from "./components/Category-8/CleaningPreparations";
import { PapersAndNapkins } from "./components/Category-8/PapersAndNapkins";
import { CleaningProducts } from "./components/Category-8/CleaningProducts";
import { Flavorings } from "./components/Category-8/Flavorings";
import { DogAndCat } from "./components/Category-9/DogAndCat";
import { DogFood } from "./components/Category-9/DogFood";
import { CatFood } from "./components/Category-9/CatFood";
import { Treats } from "./components/Category-9/Treats";
import { Accessories } from "./components/Category-9/Accessories";
import { NotFound } from "./components/NotFound";
import { AdminGuards } from "./components/Guards/AdminGuards";
import { AuthGuards } from "./components/Guards/AuthGuards";
import { OrderGuards } from "./components/Guards/OrderGuards";
import { ScrollTop } from "./components/ScrollTop";
import { Interesting } from "./components/Footer-Info/Interesting";
import { Soups } from "./components/Footer-Info/Interesting/Recipes/Soups";
import { SoupsInfo } from "./components/Footer-Info/Interesting/Recipes/Soups/SoupsInfo";

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

                                <Route path="/interesting/soups-recipies" element={<Soups showNavigationAndFooter={showNavigationAndFooter} />} />
                                <Route path="/interesting/soups-recipies/:soupId" element={<SoupsInfo showNavigationAndFooter={showNavigationAndFooter} />} />

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
