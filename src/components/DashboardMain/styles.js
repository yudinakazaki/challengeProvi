import styled from 'styled-components'

export const DashboardMain = styled.div`
  display: flex;
  width: 100%;
  background: #d9d9d9;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
 
`

export const DashboardContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    @media(min-width: 1000px){
        flex-direction: row;
    }
`

export const DashboardInfo = styled.div` 
    display: flex;
    flex-direction: column;
    margin: 30px auto;  
    background-color: white;
    padding: 20px;
    width: 180px;
    align-items: center;
    box-shadow: 0 2px 6px -2px rgba(0, 0, 0, 0.4);
    margin-bottom: 30px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    align-content: center;
    
    h1 {       
        font-size: 20px;
        line-height: 24px;
        text-align: center; 
        margin-bottom:10px;
    }      

    p {
        font-size: 13px;
        line-height: 18px;
        text-align: left;
    }
    
    svg {
        width: 56px;
        height: 56px;
    }

    @media(min-width: 1000px){
        width: 300px;
        height: 300px;

        h1 {       
            font-size: 30px;
            line-height: 34px;
        }    
        p {
            font-size: 20px;
            line-height: 30px;
        }
    
        svg {
            width: 80px;
            height: 80px;
        }
    }

    
`
export const InstallmentsContainer = styled.div`
    background: white;
    padding: 10px 20px;
    margin-top: 30px;

    h1 {       
        font-size: 25px;
        line-height: 24px;
        text-align: center; 
        margin-bottom: 10px;
    }
    
    ul {
        list-style: none;
    }

    li {
        display: flex;
        flex-direction: column;
        border-bottom: 1px solid #d9d9d9;
        margin-bottom: 10px;
        
        > strong {
            font-size: 20px;
        }

        > span {
            font-size: 18px;
            line-height: 24px;
            text-align: left;
            margin-bottom: 5px;
        }

        > button {
						display: flex;
						background: transparent;
						justify-content: center;
						align-items: center;
						border: 1px solid black;
						border-radius: 25px;
						margin-bottom: 5px;
					 
						> svg{
							width: 24px;    
							height: 24px
            }

        
        }

        > button:hover{
            color: green;
            cursor: pointer;
        }
    }

    li:last-child{
        border-bottom-width: 0px;
    }

    @media(min-width: 1000px){
        width: 80%;
    
    
			h1 {       
					font-size: 35px;
					line-height: 40px;
			}

			li {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
			
				> strong {
            font-size: 30px;
				}

			  > span {
					font-size: 24px;
					line-height: 28px;
        }
				
				> button {
					border: none;
					font-size: 20px;
					display: flex;
					flex-direction: column;
					> svg{
						width: 56px;    
						height: 56px
					}
				}
			}
        
    }

`