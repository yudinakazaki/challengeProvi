import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Profile from '../pages/Profile'
import Messages from '../pages/Messages'
import Wallet from '../pages/Wallet'
import TransactionHistory from '../pages/TransactionHistory'


export default function (){
  return (
    <Switch>
      <Route path="/" exact component={Dashboard}/>
      <Route path="/profile" component={Profile}/>
      <Route path="/messages" component={Messages}/>
      <Route path="/wallet" component={Wallet}/>
      <Route path="/transaction-history" component={TransactionHistory}/>
    </Switch>
  )
}