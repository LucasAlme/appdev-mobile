import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import CardMain from '../../components/cardMain';
import styles from './style';

const eu = require('../../components/images/eu.jpg');
const josep = require('../../components/images/joseph.jpg');
const stela = require('../../components/images/stela.jpg');
const jean = require('../../components/images/jean.png');
export default function Main() {

    const [user, setUser] = useState([
        {
            name: "Lucas Almeida", attach: "React Native, ReactJs, SpringBoot", description: "Trabalho atualmente com front-end. Estudando API's com spring-boot",
            photo: eu, port: "https://github.com/LucasAlme"
        },
        {
            name: "Stela Higa", attach: "Psicologia Comportamental", description: "20 anos, cursando Psicologia - 4° Semestre. Em busca de um primeiro emprego formal",
            photo: stela, port: "https://www.linkedin.com/in/stela-higa/"
        },
        {
            name: "Joseph Victor", attach: "Photoshop, Illustrator", description: "Freelance Illustrator 20y 🇧🇷",
            photo: josep, port: "https://www.instagram.com/_josephvictor/"
        },
        {
            name: "Jean Costa", attach: "Java, Python, JavaScript", description: "Estudante de programação no Instituto PROA",
            photo: jean, port: "https://github.com/jeancostt"
        },
    ]);

    return (
        <View style={styles.background}>
            <FlatList
                data={user}
                renderItem={({ item: item }) => (
                    <CardMain item={item} />
                )}
            />
        </View>

    )
}