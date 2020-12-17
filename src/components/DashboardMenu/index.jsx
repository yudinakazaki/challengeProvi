import React from 'react'
import { DashboardMenu} from './styles'
import { dashboardMenuData } from './dashboardMenuData'

export default function () {
    return (
        < DashboardMenu >
                <ul>
                    {dashboardMenuData.map((item, key) => {
                        return (                         
                                <li key={key}>
                                    <div>{item.icon}</div>
                                    <div>{item.title}</div>
                                </li>
                            )
                        })}
                </ul>
        </ DashboardMenu >
    )
}
