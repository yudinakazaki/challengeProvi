import React from 'react'

import { Header, ProfileInfo, Icons, Logo, Avatar } from './styles'
import { FiLogOut, FiSettings } from 'react-icons/fi'
import logo from '../../assets/logo.png'
import logoMobile from '../../assets/logo_mobile.png'
import avatar from '../../assets/userAvatar.png'

export default function() {
  return (
    <Header > 
      <Logo >
        <img src={logo} alt="logo"/>
        <img src={logoMobile} alt="logo"/>
      </Logo>

      <ProfileInfo>
        <Avatar>
          <img src={avatar} alt="user_avatar"/>
        </Avatar>

        <span>
          <p>Welcome Back,</p>
          <strong>Yudi Nakazaki</strong>
        </span>
      </ProfileInfo>

      <Icons>
        <button type='button'>
          <FiSettings />
         <p>Settings</p>
        </button>

        <button type='button'>
          <FiLogOut />
          <p>Logout</p>
        </button>
      </Icons>
      
    </Header>
  )
}