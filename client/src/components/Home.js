import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react';
import { HomeColor } from '../styles/AppStyle';

const Home = () => (
  <HomeColor>
    <h2>Welcome to React Jeopardy</h2>
    <Link to = '/categories'>
      <img src = 'https://orig00.deviantart.net/dedb/f/2014/167/5/f/jeopardy__by_buddyboy600-d7mnpmi.gif' />
    </Link>
  </HomeColor>
)

export default Home;