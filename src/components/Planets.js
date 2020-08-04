import React, {useState, useEffect} from 'react';
import { Card, Grid } from 'semantic-ui-react';
import Search from './Search';

const Planets = ({data}) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([data]);
    
     useEffect(() => {
        const results = data.filter((planet) => planet.name.toLowerCase().includes(searchTerm));
        setSearchResults(results);
      }, [searchTerm]);
    return (
        <div>
            Search by planet: 
            <Search onChange={(value) => setSearchTerm(value)} />
            <Grid columns={3}>
                {searchResults.map((planet, i) => {
                    return (
                        <Grid.Column key={i}> 
                            <Card>
                                <Card.Content>
                                    <Card.Header>{planet.name}</Card.Header>
                                    <Card.Description>
                                        <p>climate {planet.climate}</p>
                                        <p>Population {planet.population}</p>
                                        <p>Terrain{planet.terrain}</p>
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    )
                })}
            </Grid>
        </div>
    )
}

export default Planets;