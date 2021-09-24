import React from 'react';
import { Text, View, Linking, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { cores } from '../../utils/Constants';
import styles from './style';


export default function CardMain({ item }) {
    return (
        <View style={styles.containerCard}>
            <Text style={{top: 10, fontSize: 16}}>{item.name}</Text>
            <View style={{ flexDirection: 'row', justifyContent:'space-between' }}>
                <Text style={{marginTop: '5%', color: cores.cinzaEscuro}}>{item.attach}</Text>
                <Image source={item.photo} style={styles.img} />
            </View>
            <Text style={{bottom: 10}}>{item.description}</Text>
            <TouchableOpacity onPress={() => Linking.openURL(item.port)}>
                <Text style={styles.txtPurple}>Acessar perfil do portfólio</Text>
            </TouchableOpacity>
        </View>
    )
}