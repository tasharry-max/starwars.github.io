import React, {useState, useEffect} from 'react';
import { Card, Grid } from 'semantic-ui-react';
import Search from './Search';

const People = ({data}) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([data]);
    
     useEffect(() => {
        const results = data.filter((person) => person.name.toLowerCase().includes(searchTerm));
        setSearchResults(results);
      }, [searchTerm]);
    return (
        <div>
            <Search onChange={(value) => setSearchTerm(value)} />
            <Grid columns={3}>
                {searchResults.map((people, i) => {
                    return (
                        <Grid.Column key={i}> 
                            <Card>
                                <Card.Content>
                                    <Card.Header>{people.name}</Card.Header>
                                    <Card.Description>
                                        <p>{people.height}</p>
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

export default People;