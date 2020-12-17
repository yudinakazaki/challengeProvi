import React from 'react';

import { Dashboard, DashboardContent } from './styles'
import DashboardMenu from '../DashboardMenu'
import DashboardMain from '../DashboardMain'
import Header from '../Header'
import UserProvider from '../../context/User';

export default function() {
  return (
    <UserProvider>
      <Dashboard>
        <Header />
        <DashboardContent>
          <DashboardMenu />
          <DashboardMain />
        </DashboardContent>
      </Dashboard>
    </UserProvider>
  )
}

