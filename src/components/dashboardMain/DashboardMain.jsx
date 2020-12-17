import React,  { useEffect, useState } from 'react'

import { DashboardMain,DashboardContainer, InstallmentsContaier } from './styles'
import { FcMoneyTransfer } from 'react-icons/fc'
import { MdPayment } from 'react-icons/md'
import { GrContactInfo } from 'react-icons/gr'



export default function () {
   const [userData, setUserData] = useState([])
   const [installments, setInstallments] = useState([])
    useEffect ( async () => {
        const res = await fetch('https://www.mocky.io/v2/5c923b0932000029056bce39')
        const data = await res.json()

        setUserData(data)
        setInstallments(data.installments)
    }, []  )

        
    return (
        
        <DashboardMain>
            <span>
                <DashboardContainer>
                    <div >
                        <FcMoneyTransfer/>   
                        <h1>Amount Taken</h1>
                    </div>
                    <div>
                        <h1>R$ {userData.amountTaken} BRL</h1> 
                    </div>
                </DashboardContainer>
                    
                <DashboardContainer>
                    <div >
                    <GrContactInfo/>
                    <h1>Summary</h1>
                    </div>

                    <div>
                        <p>Your id: {userData.UserId} </p>
                        <p>Amout Paid: {userData.amountPayd}</p>
                        <p>Total Amount in Taxes: R$ {userData.totalAmountInTaxes} BRL</p>
                        <p>Monthly Interest: {userData.monthlyInterest}</p>
                    </div>
                </DashboardContainer>
            </span>
         
          
                <InstallmentsContaier>
                    <h1>Your Installments</h1>
                    <ul>
                        {installments.map((item, key) => {
                            return (   
                                    <li key={key}>
                                        <h1>Value: {item.formatedValue} BRL</h1>
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
                </InstallmentsContaier>   
        </DashboardMain>

    )
}