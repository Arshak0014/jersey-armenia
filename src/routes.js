import React from 'react';
import Layout from "./Hoc/layout";
import {Switch} from "react-router-dom";

import PrivateRoute from './Components/authRoutes/privateRoutes';
import PublicRoute from "./Components/authRoutes/publicRoutes";

import Home from "./Components/Home";
import SignIn from "./Components/signin";
import Dashboard from "./Components/admin/Dashboard";
import AdminJerseys from "./Components/admin/jerseys";
import AddEditJerseys from "./Components/admin/jerseys/addEditJerseys";
import TheShopJersey from "./Components/theShopJersey";
import TheShopPolo from "./Components/theShopPolo";
import TheSportsWear from "./Components/theSportsWear";
import TheCoats from "./Components/theCoats";
import TheKids from "./Components/theKids";
import TheWomen from "./Components/theWomen";
import TheSportShoes from "./Components/theShoes/theSportShoes";
import TheBoots from "./Components/theShoes/theBoots";
import TheOrderShop from "./Components/theOrderShop";
import WinJersey from "./Components/winJersey";
import ProductDetails from "./Components/productDetails";
import NotFound from "./Components/ui/not_found";



const Routes = (props) => {

      return(
          <Layout>
              <Switch>
                    <PublicRoute {...props} restricted={true} path="/sign_in" exact component={SignIn}/>
                    <PrivateRoute {...props} path="/admin_jerseys/add_jerseys" exact component={AddEditJerseys}/>
                    <PrivateRoute {...props} path="/admin_jerseys/add_jerseys/:id" exact component={AddEditJerseys}/>
                    <PrivateRoute {...props} path="/admin_jerseys" exact component={AdminJerseys}/>
                    <PrivateRoute {...props} path="/dashboard" exact component={Dashboard}/>


                    <PublicRoute {...props} restricted={false} path="/coat" exact component={TheCoats}/>
                    <PublicRoute {...props} restricted={false} path="/polo" exact component={TheShopPolo}/>
                    <PublicRoute {...props} restricted={false} path="/jersey" exact component={TheShopJersey}/>
                    <PublicRoute {...props} restricted={false} path="/sportswear" exact component={TheSportsWear}/>
                    <PublicRoute {...props} restricted={false} path="/women" exact component={TheWomen}/>
                    <PublicRoute {...props} restricted={false} path="/kids" exact component={TheKids}/>
                    <PublicRoute {...props} restricted={false} path="/sport_shoes" exact component={TheSportShoes}/>
                    <PublicRoute {...props} restricted={false} path="/boots" exact component={TheBoots}/>
                    <PublicRoute {...props} restricted={false} path="/available" exact component={TheOrderShop}/>
                    <PublicRoute {...props} restricted={false} path="/win" exact component={WinJersey}/>
                    <PublicRoute {...props} restricted={false} path="/product_details/:id" exact component={ProductDetails}/>


                    <PublicRoute {...props} restricted={false} path="/" exact component={Home}/>
                    <PublicRoute {...props} restricted={false} exact component={NotFound}/>
              </Switch>
          </Layout>
      )
};

export default Routes;