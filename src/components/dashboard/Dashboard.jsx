import React from 'react'

import Header from '../header/Header'
import DashboardMenu from '../dashboardMenu/DashboardMenu'
import DashboardMain from '../dashboardMain/DashboardMain'
import { Dashboard, DashboardContent } from './styles'

export default function() {
    return (

        <Dashboard>
            <Header/>
            <DashboardContent>
                <DashboardMenu />
                <DashboardMain />
            </DashboardContent>
        </Dashboard>
    )
}