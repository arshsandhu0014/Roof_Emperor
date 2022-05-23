import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import { Switch, Route } from "react-router";
import ListPage from "../pgListPage/Listpage";
import InfoPage from "../info-page/Infopage";
import HomeContent from "../home-content/HomeContent";
import Login from "../login/Login";
import Register from "../register/Register";
import Book from "../book/Book";
import { Redirect } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Wishlist from "./../wishlist/Wishlist";
import PgExplore from "./../pgExplore/PgExplore";
import AccountPage from "./../accountPage/AccountPage";
import About from "./../about/About";

const Home = () => {
  const currentUser = {
    name: "ankit",
    email: "ankit@gmail.com",
  };
  return (
    <BrowserRouter>
      <div className='home-main'>
        <Switch>
          <Route exact path='/'>
            <Navbar />
            <HomeContent />
          </Route>
          <Route exact path='/wishlist'>
            <Wishlist />
          </Route>
          <Route path='/list'>
            <Navbar />
            <ListPage />
          </Route>
          <Route path={`/info/:currentPgId`}>
            <Navbar />
            <InfoPage />
          </Route>
          <Route path={`/pgExplore/:currentPgId`}>
            <Navbar />
            <PgExplore />
          </Route>
          <Route path={`/account`}>
            <Navbar />
            <AccountPage />
          </Route>
          <Route path='/login'>
            <Navbar login />
            <Login />
          </Route>
          <Route path='/register'>
            <Navbar login />
            <Register />
          </Route>

          {/* <Route exact path='/info/:currentPgId/book'>
              <Redirect exact to='/login' />
              </Route> */}
          <Route exact path='/about'>
            <Navbar />
            <About />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Home;
