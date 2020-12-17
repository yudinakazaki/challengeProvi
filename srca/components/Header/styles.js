import styled from 'styled-components';


export const Header = styled.div`
  background: white;
  padding: 50px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`;

export const Logo = styled.div`
  > img {
    width: 48px;
    height: 48px;

    &:nth-child(1){
      display: none;
    }

    @media (min-width: 600px){
      &:nth-child(1){
        display: flex;
        width: 138px;
        height: 41px;
      }

      &:nth-child(2){
        display: none;
      }
    }
  }
`

export const ProfileInfo = styled.div`
  display: flex;
  align-items: center;

  font-size: 13px;
  line-height: 18px;
  > strong {
    color: #000B3C;
  }

  @media (min-width: 600px){
      font-size: 23px;
      line-height: 28px;
    }
`

export const Avatar = styled.div`
  > img {
    width: max(45px, min(56px, 5vw));
    height: max(45px, min(56px, 5vw));

    border-radius: 50%;
    border: 2px solid black;
    margin-right: 10px;
  }
`

export const Icons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  > button {
    display: flex;
    flex-direction: column;
    align-items: center;

    cursor: pointer;
    background: transparent;
    font-size: 24px;

    &:nth-child(2){
      margin-left: 10px;
    }
  > p {
    display: none;

    @media (min-width: 600px){
      display: flex;
    }
  }
  }
`

