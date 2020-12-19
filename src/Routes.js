import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Hisse from './components/Hisse'
import Home from './pages/Home'

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/hisse/:code" component={Hisse} />
    </Switch>
  )
}
