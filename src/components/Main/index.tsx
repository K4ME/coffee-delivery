

import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import coffeeCup from '../../assets/coffee-cup.png'

import { MainContainer, TitleContainer, ItensContainer } from './styles'

export function Main(){
  return (
    <MainContainer>

      <TitleContainer>
       <h1>Encontre o café perfeito para qualquer hora do dia</h1>
       <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          
        <ItensContainer>
          <span>
            <ShoppingCart size={24} weight="fill" bg-color='#C47F17' /> 
            Compra simples e segura
          </span>
          <span>
            <Package size={24} weight="fill" bg-color='#574F4D'/>
            Embalagem mantém o café intacto
          </span>
          </ItensContainer>

          <ItensContainer>
            <span>
              <Timer size={24} weight="fill" bg-color='#DBAC2C'/>
              Entrega rápida e rastreada
            </span>
            <span>
              <Coffee size={24} weight="fill" bg-color='#8047F8'/>
              O café chega fresquinho até você
            </span> 
        </ItensContainer>
      </TitleContainer>  

       

      <img src={coffeeCup} alt='imagem de um copo de café com alguns grãos e pó de café ao lado e o escrito Coffee Delivery' />
         
    </MainContainer>
  );
}
