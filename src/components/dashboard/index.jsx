import React from 'react';

import { Dashboard, DashboardContent } from './styles'
import DashboardMenu from '../DashboardMenu'
import DashboardMain from '../DashboardMain'
import Header from '../Header'

export default function() {
  return (
    <Dashboard>
      <Header />
      <DashboardContent>
        <DashboardMenu />
        <DashboardMain />
      </DashboardContent>
    </Dashboard>
  )
}

