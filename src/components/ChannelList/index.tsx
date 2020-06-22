import React from 'react';
import { Container } from './styles';

const OptionButton: React.FC = () => {
    return (
        <div className="channel">
            <div className="channel-banner"></div>
            <div className="channel-footer">
                <div className="channel-footer-icon"></div>
                <div className="channel-footer-description">
                    <span>10 DICAS de Ouro para se</span>
                    <small>Dev Media</small>
                    <small>45 mil visualizações</small>
                    <small>há 1 ano</small>
                </div>
            </div>
        </div>
    );
}

const ChannelList: React.FC = () => {
  return (
      <Container>
        <h1>Recomendados</h1>
        <div className="channel-list">
        <OptionButton />
        <OptionButton />
        <OptionButton />
        <OptionButton />
        </div>
      </Container>
  );
}

export default ChannelList;