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
    },
    {
        title: "Dashboard",
        icon: <MdDashboard />,
    },
    {
        title: "Messages",
        icon: <BiMessageSquareDetail />,
    },
    {
        title: "Wallet",
        icon: <IoWalletOutline />,
    },
    {
        title: "Transactions History",
        icon: <FaHistory />,
    }
]