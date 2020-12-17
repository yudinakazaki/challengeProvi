import React from 'react'
import { 
  DashboardMain, 
  DashboardContainer,
  DashboardInfo,
  InstallmentsContainer 
} from './styles'

import { FcMoneyTransfer } from 'react-icons/fc'
import { MdPayment } from 'react-icons/md'
import { GrContactInfo } from 'react-icons/gr'
import { useUserData } from '../../context/User'


export default function(){
 
  const { userData, installments } = useUserData()

  return(
    <DashboardMain>
      <DashboardContainer>
        <DashboardInfo>
          <FcMoneyTransfer/> 
          <h1>Amount Taken</h1>  
          <h1>R$ {userData.amountTaken} BRL</h1>               
        </DashboardInfo>
        
        <DashboardInfo>    
          <GrContactInfo/>
          <h1>Summary</h1>

          <div>
            <p>Your id: {userData.UserId} </p>
            <p>Amout Paid: {userData.amountPayd}</p>
            <p>Total Amount in Taxes: R$ {userData.totalAmountInTaxes} BRL</p>
            <p>Monthly Interest: {userData.monthlyInterest}</p>
          </div>
        </DashboardInfo>
      </DashboardContainer>

      <InstallmentsContainer>
        <h1>Your Installments</h1>
        <ul>
            {installments.map((item, key) => {
                return (   
                        <li key={key}>
                            <strong>Value: {item.formatedValue} BRL</strong>
                            <span>
                                <p>Status: {item.payd ? 'Paid' : 'Not Paid'}</p>
                                <p>Due Date: {item.dueDate}</p>
                            </span>
                                <button>
                                    {<MdPayment/>} 
                                    <span>
                                        Pay Now    
                                    </span>
                                </button>
                        </li>                     
                )
            })}
        </ul>
      </InstallmentsContainer>
    </DashboardMain>
  )
}