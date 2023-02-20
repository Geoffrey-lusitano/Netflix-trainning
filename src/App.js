import './App.scss';
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import Banner from './components/banner/Banner';
import Row from './components/row/Row';
import Video from'./components/Video';
import requests from './config/Requests';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {/* navbar */}
            <Nav />

            {/* banner*/}
            <Banner />
            {/* rows */}
            <Row
              title="Programmes originaux Netflix"
              fetchUrl={requests.fetchNetflixOriginals}
              isPoster={true}
            />
            <Row
              title="Tendances actuelles"
              fetchUrl={requests.fetchTrending}
            />
            <Row title="les mieux notés" fetchUrl={requests.fetchTopRated} />
            <Row title="Films d'action" fetchUrl={requests.fetchActionMovies} />
            <Row title="Films d'horror" fetchUrl={requests.fetchHorrorMovies} />
            <Row
              title="Films de romance"
              fetchUrl={requests.fetchRomanceMovies}
            />
            {/* video */}
            {/* quick view */}
            {/* footer */}
            <Footer />
          </Route>
          <Route path="/video/:id" component={Video}/>
          <Route path="*">
            <Redirect to="/"/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
