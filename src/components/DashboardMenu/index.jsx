import React from 'react'
import { Link } from 'react-router-dom'

import { DashboardMenu} from './styles'
import { dashboardMenuData } from './dashboardMenuData'

export default function () {
    return (
        < DashboardMenu >
          <ul>
              {dashboardMenuData.map((item, key) => {
                  return (
                    <Link to={item.page} style={{ textDecoration: 'none'}}> 
                      <li key={key}>
                          <div>{item.icon}</div>
                          <div>{item.title}</div>
                      </li>
                    </Link>                         
                    )
                  })}
          </ul>
        </ DashboardMenu >
    )
}
