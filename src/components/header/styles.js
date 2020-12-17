import styled from 'styled-components'

export const Header = styled.div`
    background-color: white;
`
export const HeaderContent = styled.div`
    padding: 24px;
    display:flex;
    align-items: center;

    > img {
        width: 138px;
        height: 41px;
    }

    button {
        cursor: pointer;
        margin-left: 8px;
        background: transparent;
        border: 0;
        display: block;
        svg {
            width: 25px;
            height: 25px;
        }

        p {
            font-weight:bold;
        }
    }
    
`

export const Profile = styled.div`
    display:flex;
    margin: 0 auto;

    >img{
        width: 56px;
        height: 56px;  
        border-radius: 50%;
        border: 2px solid black;
    }

    span {
        
        line-height: 25px;
        display:flex;
        flex-direction: column;
        margin-top: 10px;
        margin-left: 20px;
    }

    strong {
        font-size: 18px;
        color: #000B3C;
    }
`