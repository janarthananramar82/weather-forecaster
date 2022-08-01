import React from 'react'
import { Card, Badge } from 'react-bootstrap'
import './App.scss';
import Main from './components/main/index'
import Favorites from './components/favorites/index'
import SearchLocation from './components/searchLocation/index'

const App = () => {
  return (
    <div className='app-container'>
      <Card className='container-card'>
        <h1>
          <Badge bg="secondary">My Forecast</Badge>
        </h1>
        <div className='location-section'>
          <SearchLocation />
          <Favorites />
        </div>
        <Main />
      </Card>
    </div>
  );
}

export default React.memo(App);
