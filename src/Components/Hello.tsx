// components/Hello.tsx
import React from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';

export interface Props {
    name: string;
    enthusiasmLevel?: number;
}

const Hello: React.FC<Props> = (props) => {
    const [enthusiasmLevel, setEnthusiasmLevel] = React.useState(
        props.enthusiasmLevel
    );

    const onIncrement = () =>
        setEnthusiasmLevel((enthusiasmLevel || 0) + 1);
    const onDecrement = () =>
        setEnthusiasmLevel((enthusiasmLevel || 0) - 1);

    const getExclamationMarks = (numChars: number) =>
        Array(numChars + 1).join('!');
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.root}>
                <Text style={styles.greeting}>
                    Hello{' '}
                    {props.name + getExclamationMarks(enthusiasmLevel || 0)}
                </Text>
                <View style={styles.buttons}>
                    <View style={styles.button}>
                        <Button
                            title="-"
                            onPress={onDecrement}
                            accessibilityLabel="decrement"
                            color="red"
                        />
                    </View>

                    <View style={styles.button}>
                        <Button
                            title="+"
                            onPress={onIncrement}
                            accessibilityLabel="increment"
                            color="blue"
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

// styles
const styles = StyleSheet.create({
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        padding: 10,
        height: 60,
        backgroundColor: 'transparent',
        paddingTop: 50
    },
    root: {
        alignItems: 'center',
        alignSelf: 'center'
    },
    buttons: {
        flexDirection: 'row',
        minHeight: 70,
        alignItems: 'stretch',
        alignSelf: 'center',
        borderWidth: 5
    },
    button: {
        paddingVertical: 0
    },
    greeting: {
        color: '#999',
        fontWeight: 'bold'
    },
    container: {
    },
});

export default Hello;
