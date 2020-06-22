import React from 'react';
import { Container, HomeIcon, Separator } from './styles';

interface Props {
    description: string;
}

const OptionButton: React.FC<Props> = ({ description }) => {
    return (
        <div className="option-button">
            <HomeIcon />
            <span>{description}</span>
        </div>
    );
}

const Options: React.FC = () => {

    return (
        <Container>
            <OptionButton description="Início" />
            <OptionButton description="Em alta" />
            <OptionButton description="Inscrições" />
            <Separator />
            <OptionButton description="Biblioteca" />
            <OptionButton description="Histórico" />
            <OptionButton description="Seus vídeos" />
            <OptionButton description="Assistir mais tarde" />
            <OptionButton description="Mostrar mais" />
            <Separator />
            <OptionButton description="Biblioteca" />
            <OptionButton description="Histórico" />
            <OptionButton description="Seus vídeos" />
            <OptionButton description="Assistir mais tarde" />
            <OptionButton description="Mostrar mais" />
        </Container>
    );
}

export default Options;