import React from 'react'

import { CgProfile } from 'react-icons/cg'
import { IoWalletOutline } from 'react-icons/io5'
import { FaHistory } from 'react-icons/fa'
import { MdDashboard } from 'react-icons/md'
import { BiMessageSquareDetail } from 'react-icons/bi'


export const dashboardMenuData = [
  {
      title: "Profile",
      icon: <CgProfile />,
      page:"profile",
  },
  {
      title: "Dashboard",
      icon: <MdDashboard />,
      page:"/",
  },
  {
      title: "Messages",
      icon: <BiMessageSquareDetail />,
      page:"messages",
  },
  {
      title: "Wallet",
      icon: <IoWalletOutline />,
      page:"wallet",
  },
  {
      title: "Transactions History",
      icon: <FaHistory />,
      page:"transaction-history",
  }
]