import { StyleSheet } from 'react-native';
import { cores } from '../../utils/Constants';

export default styles = StyleSheet.create({
    
    containerCard: {
        width: '85%',
        alignSelf: 'center',
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        backgroundColor: cores.branco,
        elevation: 5,
        borderColor: cores.cinza,
        marginVertical: 10,
        padding: 10
    }
})
