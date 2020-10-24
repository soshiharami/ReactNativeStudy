import React from 'react'
import {StyleSheet, Text, TouchableOpacity} from 'react-native'

type Props = {
    value: 'X' | 'O' | null
    onPress: () => void
}

const Square: React.FC<Props> = (props) => {
    const {value} = props;
    return (
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
            <Text style={styles.text}>{value}</Text>
        </TouchableOpacity>)
}

const styles = StyleSheet.create({
    container: {
        width: 80,
        height: 80,
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 24,
    }
})

export default Square


