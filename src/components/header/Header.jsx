import React from 'react'

import { FiLogOut, FiSettings } from 'react-icons/fi'
import logo  from '../../assets/logo.png'
import avatar from '../../assets/userAvatar.png'

import { Header, HeaderContent, Profile } from './styles'

export default () =>
    <Header>
        <HeaderContent>
            <img src={logo} alt="Logo"></img>

            <Profile>
                <img src={avatar} alt="user_avatar"/>
                <span>
                    <p>Welcome back,</p>
                    <strong>Yudi Nakazaki</strong>
                </span>

            </Profile>
                <button type="button">
                    <FiSettings/>
                    <p>Settings</p>
                </button>
                
                <button type="button">
                    <FiLogOut/>
                    <p>Logout</p>
                </button>

        </HeaderContent>
    </Header>