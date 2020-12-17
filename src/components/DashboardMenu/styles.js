import styled from 'styled-components'

export const DashboardMenu = styled.div`
  position: sticky;
  max-height: 100vh;
  overflow-y: auto;
  top: 0;
  left: 0;
  background-color: #000B3C;
  width: 70px;
  flex-shrink: 0;

  @media(min-width: 600px){
    width: 250px;
  }

  ul {
    height: 100%;
    width: 100%;
  }

  li {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 8vh;
    color: white;
    justify-content: center;

    box-sizing: border-box;
    align-items:center;


    > div {
      flex: 30%;
      display: grid;
      place-items: center;
    }

    div:nth-child(2){
      display: none;
      
      @media(min-width: 600px){
        display: flex;
      }
      flex: 70%;
      justify-content: left;
    }
  }

    li:hover {
    cursor: pointer;
    background-color: #001367;
   
    }
`