import styled from 'styled-components'

export const MainContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 5rem;
  margin-left: 10rem;
  margin-right: 10rem;
  
`

export const TitleContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  h1 {
    font-size: 3rem;
    font-weight: bold;
  }

  p {
    font-size: 1.3rem;
    margin-top: -12px;
  }
`
export const ItensContainer = styled.div`
  display: flex;
  align-items: center;

  span {
    display: flex;
    align-items: center;
    width: 300px;
    margin-top: 12px;
    gap: 8px;
  }

  svg {
    background-color: ${props => props.color};
    //color: #FAFAFA;
  }

`
