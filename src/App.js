import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./pages/landingPage/landingPage.component";
import PricingPage from "./pages/pricingPage/pricingPage.component";
import MarketPage from "./pages/marketPage/marketPage.component";
import PrivacyPolicy from "./pages/privacyPolicy/privacyPolicy.component";
import TermsConditions from "./pages/termsAndConditions/termsConditions.component";
import UserDashboard from "./pages/user/dashboard/dashboard.component";
import PersonalDetails from "./pages/user/personalDetails/personalDetails.component";
import PaymentDetails from "./pages/user/paymentDetails/paymentDetails.component";
import Deposit from "./pages/user/deposit/deposit.component";
import Withdrawal from "./pages/user/withdrawal/withdrawal.component";
import ActivatePackage from "./pages/user/activatePackage/activatePackage.component";
import CurrentPackage from "./pages/user/currentPackage/currentPackage.component";
import Transaction from "./pages/user/transaction/transaction.component";
import Referrals from "./pages/user/referrals/referrals.component";
import LoginPage from "./pages/loginPage/loginPage.component";
import SignupPage from "./pages/signupPage/signupPage.component";
import AdminDashboard from "./pages/admin/adminDashboard/adminDashboard.component";
import Users from "./pages/admin/users/users.component";
import AdminLoginPage from "./pages/admin/adminLoginPage/adminLoginPage.component";
import DepositPayment from "./pages/user/depositPayment/depositPayment.component";
import UsersDetails from "./pages/admin/userDetails/userDetails.component";

function App() {
  useEffect(() => {
    localStorage.removeItem("login");
  }, []);
  return (
    <Switch>
      <Route exact path='/' component={LandingPage} />
      <Route path='/pricing' component={PricingPage} />
      <Route path='/market' component={MarketPage} />
      <Route path='/privacy-policy' component={PrivacyPolicy} />
      <Route path='/terms-and-conditions' component={TermsConditions} />
      <Route path='/user/dashboard' component={UserDashboard} />
      <Route path='/user/personaldetails' component={PersonalDetails} />
      <Route path='/user/paymentdetails' component={PaymentDetails} />
      <Route exact path='/user/deposit' component={Deposit} />
      <Route path='/user/withdrawal' component={Withdrawal} />
      <Route path='/user/activatepackage' component={ActivatePackage} />
      <Route path='/user/currentpackage' component={CurrentPackage} />
      <Route path='/user/transaction' component={Transaction} />
      <Route path='/user/referrals' component={Referrals} />
      <Route path='/user/deposit/payment' component={DepositPayment} />
      <Route path='/login' component={LoginPage} />
      <Route path='/signup' component={SignupPage} />
      <Route path='/admin/login' component={AdminLoginPage} />
      <Route path='/admin/dashboard' component={AdminDashboard} />
      <Route path='/admin/users/Details' component={UsersDetails} />
      <Route path='/admin/users' component={Users} />
    </Switch>
  );
}

export default App;
