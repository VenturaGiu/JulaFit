import React from "react";
import { Text } from "react-native";

import { 
    Container, 
    Header,
} from './styles';

import { Input } from '../../components/Input';

import backgroundImg from '../../assets/bannerJulaFit.png' ;

export function Home() {
    return (
        <Container>
            <Header source={ backgroundImg }>
                <Input placeholder="Pesquisar" />
            </Header>
        </Container>
    );
}