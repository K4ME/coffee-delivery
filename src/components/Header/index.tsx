import { MapPin, ShoppingCartSimple } from 'phosphor-react';

import { HeaderContainer } from './styles';

import logo from '../../assets/logo.png'

export function Header(){
  return (
    <HeaderContainer>
      <img src={logo} alt='imagem de um copo de café e o escrito Coffee Delivery' />

      <div>
        <a>
          <MapPin size={22} weight="fill" color='#8047F8'/> 
          Cidade
        </a>
        <button><ShoppingCartSimple size={22} weight="fill" /></button>
      </div>      
    </HeaderContainer>
  );
}
