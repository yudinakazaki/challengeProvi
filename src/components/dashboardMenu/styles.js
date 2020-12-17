import styled from 'styled-components'

export const DashboardMenu = styled.div`
    height: 100%;
    width: 100%;
    background-color: #000B3C;
    

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
        min-width:  100px;
        min-height: 50px;
        > div {
            flex: 30%;
            display: grid;
            place-items: center;
            
        }

        div:nth-child(2){
            flex: 70%;
            justify-content: left;
        }
    }

    li:hover {
        cursor: pointer;
        background-color: #001367;
    }



`

