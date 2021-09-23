import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './style';

export default function CardMain({item}) {
    return (
        <View style={styles.containerCard}>
            <Text>{item.name}</Text>
            <Text>{item.attach}</Text>
            <Text>{item.description}</Text>
            <TouchableOpacity>
                <Text>Acessar perfil do portfólio</Text>
            </TouchableOpacity>
        </View>
    )
}