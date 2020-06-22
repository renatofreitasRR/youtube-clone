import React from 'react';
import {
  Container,
  MenuIcon,
  KeyboardIcon,
  SearchIcon,
  CameraIcon,
  AppsIcon,
  NotificationIcon
} from './styles';
import logo from '../../assets/youtubelogo.svg';
const SearchBar: React.FC = () => {
  return (
    <Container>
      <div className="yticon">
        <MenuIcon />
        <img src={logo} alt="youtube" />
      </div>
      <div className="input">
        <input placeholder="Pesquisar" />
        <KeyboardIcon />
        <div className="search">
          <SearchIcon />
        </div>
      </div>
      <div className="icons">
        <CameraIcon />
        <AppsIcon />
        <div className="notify">
          <NotificationIcon />
        </div>
        <img src="https://st.depositphotos.com/1371851/2016/i/450/depositphotos_20168337-stock-photo-cheerful-man.jpg" alt="Imagem de perfil" />
      </div>
    </Container>
  )
}

export default SearchBar;