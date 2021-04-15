import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import HomePage from "./Routes/HomePage";
import LoginPage from "./Routes/LoginPage";
import SignUpPage from "./Routes/SignUpPage";
import PostItemPage from "./Routes/PostItemPage";
import ItemPage from "./Routes/ItemPage";

function App() {
  return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/sell" component={PostItemPage} />
          <Route path="/item" component={ItemPage} />
          <Footer />
        </div>
      </Router>

  // <Router >
  //   <div>
  //     <Route exact path="/" component={Home} />
  //     <Route path="/CheckOut" component={CheckOut} />
  //     <Route path="/SellerInfo" component={Page2} />
  //     <Route path="/RateSeller" component={Page3} />
  //     <Route path="/BuyerOrder" component={Page4} />
  //     <Route path="/RateDone" component={RateDone} />
  //     <Route path="/Login" component={Login} />
  //     <Route path="/Registration" component={Registration} />
  //     <Route path="/HomePage" component={HomePage} />
  //     <Route path="/Product" component={Product} />
  //     <Route path="/AllItemsPage" component={AllItemsPage} />
  //     <Route path="/ShowItem" component={ShowItem} />
  //     <Route path="/AllOrders" component={AllOrders} />
  //     <Route path="/OrderDetailPage" component={OrderDetailPage} />
  //     <Route path="/RatingPage" component={RatingPage} />
  //     <Route path="/PostDonePage" component={PostDonePage} />
  //     <Route path="/PostItem" component={PostItem} />
  //
  //   </div>
  // </Router>
  );
}

export default App;
