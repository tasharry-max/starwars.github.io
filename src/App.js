import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import {HashRouter, Switch, Route} from 'react-router-dom';
import {Container, Dimmer, Loader} from 'semantic-ui-react';
import Home from './components/Home';
import Planet from './components/Planets';
import People from './components/People';
import './App.css';

function App() {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPeople() {
      let res = await fetch("https://swapi.dev/api/people/?format=json");
      let data = await res.json();
      setPeople(data.results);
      setLoading(false);
    }

    async function fetchPlanets() {
      let res = await fetch("https://swapi.dev/api/planets/?format=json");
      let data = await res.json();
      setPlanets(data.results);
      setLoading(false);
    }

    fetchPeople();
    fetchPlanets();
  }, [])
  return (
    <div className="App">
      <HashRouter basename="/">
      <Navbar/>
      <Container>
        {loading ? (
          <Dimmer active inverted>
            <Loader inverted>Loading</Loader>
          </Dimmer>
        ) : 
        (<Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/people">
            <People data={people}/>
          </Route>
          <Route path="/planets">
            <Planet data={planets}/>
          </Route>
        </Switch>
        )}
      </Container>
      </HashRouter>
    </div>
  );
}

export default App;
