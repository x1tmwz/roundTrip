import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../components/pages/HomePage';
import Header from '../components/header/Header';
import ContactPage from '../components/pages/ContactPage';
import NotFoundPage from '../components/pages/NotFoundPage';
import FlightPage from '../components/pages/FlightPage';
import MarganimToursPage from '../components/pages/MarganimToursPage';
import PackageTourPage from '../components/pages/PackageTourPage';
import JoinToClub from '../components/misc/JoinToClub';
import NetWorkIcons from '../components/misc/NetWorkIcons';
import Footer from '../components/footer/Footer';


const AppRouter = () => {
    return (
        <BrowserRouter>
            <Header />
            <div className="appRouterContainer">
            <Switch>
                <Route path='/' component={HomePage} exact={true} />
                <Route path='/marganimtours' component={MarganimToursPage} />
                <Route path='/packagetour' component={PackageTourPage} />
                <Route path='/flight' component={FlightPage} />
                <Route path='/contact' component={ContactPage} />
                <Route path='*' component={NotFoundPage} />
            </Switch>
            </div>
            <JoinToClub />
            <Footer />
            <NetWorkIcons />
        </BrowserRouter>
    );

}
export default AppRouter;