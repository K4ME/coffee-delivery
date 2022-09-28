import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  margin-top: 1.5rem;
  margin-left: 10rem;
  margin-right: 10rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    a {
      display: flex;
      align-items: center;
      justify-content: space-between;

      background-color: #EBE5F9;
      color: #4B2995;
      border-radius: 8px;
      border: none;
      margin-right: 12px;
      padding: 8px;
    }

    button {
      background-color: #F1E9C9;
      color: #C47F17;
      border: none;
      border-radius: 8px;
      padding: 8px;
    }
  }
`