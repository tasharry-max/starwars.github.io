import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Container} from 'semantic-ui-react';
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
    }

    async function fetchPlanets() {
      let res = await fetch("https://swapi.dev/api/planets/?format=json");
      let data = await res.json();
      setPlanets(data.results);
    }

    fetchPeople();

  }, [])
  console.log(people)
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Container>
        <Switch>
          <Route exact path="/"></Route>
          <Route exact path="/people">
            <People/>
          </Route>
          <Route exact path="/planet">
            <Planet/>
          </Route>
        </Switch>
      </Container>
      </Router>
    </div>
  );
}

export default App;
