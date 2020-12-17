import styled from 'styled-components'

export const DashboardMain = styled.div`
    width: 100%;
    height: 30%;

    > span {
        display: grid;
        grid-template-columns: 1fr 1fr;
        width: 100%;
        height: 80%;
        justify-content: center;
        margin: 0 auto;
    }
    
`

export const DashboardContainer = styled.div`
    margin: 30px auto;  
    min-width: 400px;
    background-color: white;
    padding: 30px;
    text-align:center;
    align-items: center;
    box-shadow: 0 2px 6px -2px rgba(0, 0, 0, 0.4);
    display: grid;
    grid-template-rows: 1fr 1fr;
    margin-bottom: 30px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    
    > div {
        display:block;
        h1{
           
            align-items: center;
            text-align:center; 
        }
        
    }

    div:nth-child(2){
        display: block;
        text-align: left;

        p{
            font-size: 20px;
            line-height: 30px;
        }
    }
    svg {
        width: 80px;
        height: 80px;
    }
   
`

export const InstallmentsContaier = styled.div`
    
    font-family: Georgia, 'Times New Roman', Times, serif;
    width: 60%;
    margin: 0 auto;
    margin-top: 60px;
    background-color: white;
    padding: 30px;
    text-align:center;
    max-height: 800px;
    overflow: auto;
    display: grid;
    box-shadow: 0 2px 6px -2px rgba(0, 0, 0, 0.4);


   
     ul{
        list-style:none;
    }
    
    li{
        display: flex;
        padding: 30px;
        align-items: center;
        justify-content:center;
        border-bottom: 2px solid black;
        
        h1{
            flex: 35%;

        }

        span {
            flex: 30%;
            p{
                font-size: 24px;
                line-height: 28px;
            }
        }
        
        button {
            background-color:transparent;
            display:flex;
            flex-direction:column;
            align-items: center;

            svg{
                width: 56px;    
                height: 56px;
            }
        }

        button:hover {
            color: green;
            cursor: pointer
        }
        p{
            font-size: 16px;
        }

        
    }
    
    li:last-child{
        border-bottom-width: 0px;
    }
`