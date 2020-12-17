import React, 
  { createContext,
    useContext, 
    useState, 
    useEffect
  } from 'react'

const UserContext = createContext()

export default function UserProvider({children}){
  const [userData, setUserData] = useState([])
  const [installments, setInstallments] = useState([])
    useEffect ( async () => {
      const res = await fetch('https://www.mocky.io/v2/5c923b0932000029056bce39')
      const data = await res.json()

      setUserData(data)
      setInstallments(data.installments)
  }, []  )
 
  return (
    <UserContext.Provider value={{userData, installments}}>
      {children}
    </UserContext.Provider>
  )
}

export function useUserData(){

  const context = useContext(UserContext)
  const { userData, installments } = context

  return { userData, installments}
}