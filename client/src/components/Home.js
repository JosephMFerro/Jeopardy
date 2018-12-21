import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react';

const Home = () => (
  <div>
    <h2>Welcome to React Jeopardy</h2>
    <Link to = '/categories'>
      <Button>
        Start!
      </Button>
    </Link>
  </div>
)

export default Home;