import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import CardMain from '../../components/cardMain';
import styles from './style';

export default function Main() {

    const [user, setUser] = useState([
        {
            name: "Lucas Almeida", attach: "React Native, ReactJs, SpringBoot", description: "Trabalho atualmente com front-end. Estudando API's com spring-boot",
            photo: "https://avatars.githubusercontent.com/u/69490077?v=4", port: "https://github.com/LucasAlme"
        },
        {
            name: "Stela Higa", attach: "Psicologia Comportamental", description: "20 anos, cursando Psicologia - 4° Semestre. Em busca de um primeiro emprego formal",
            photo: "https://media-exp1.licdn.com/dms/image/C4D35AQHwdeNks3s4ZA/profile-framedphoto-shrink_200_200/0/1600899229701?e=1632452400&v=beta&t=iW89Ybz0QpKIFaXckkg5UxZxaBCAdbrL-_zfdouWi7I", port: "https://www.linkedin.com/in/stela-higa/"
        },
        {
            name: "Joseph Victor", attach: "Photoshop, Illustrator", description: "Freelance Illustrator 20y 🇧🇷",
            photo: "https://scontent.fgru5-1.fna.fbcdn.net/v/t1.6435-9/140187667_3597283370352629_7369064388218710671_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEC74SntC4OQwwBK--ToVoay85xZ0w4-TLLznFnTDj5Mk9nFwmg0SBHO4xg8O0ITQx25XPltk6YVrLPzBVedpVr&_nc_ohc=AvfQzrK98HEAX_5aI3s&_nc_ht=scontent.fgru5-1.fna&oh=4e038db92c237ef1761e125c76e2dc16&oe=6172932B", port: "https://www.instagram.com/_josephvictor/"
        },
        {
            name: "Jean Costa", attach: "Java, Python, JavaScript", description: "Estudante de programação no Instituto PROA",
            photo: "https://avatars.githubusercontent.com/u/89105381?v=4", port: "https://github.com/jeancostt"
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