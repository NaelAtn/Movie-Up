import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import App from './App'
import Error from './Error'
import MovieDescription from './Components/MovieDescription'


const Home = () => {
  return (
    <div>
      <Link to="/"><h1>CheckPoinst Movie-up</h1></Link>
        <Switch>

            <Route exact path='/' component={App}/>
           
            <Route path='/*' component={Error}/>
            <Route path='/Des'component={MovieDescription}/>
           
            
        </Switch>
    </div>
  )
}

export default Home