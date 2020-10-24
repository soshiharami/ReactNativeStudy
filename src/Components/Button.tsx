import * as React from 'react';
import {Text, View} from 'react-native'

export interface Props {
    text: string;
}

const Button: React.FC<Props> = (props) => {
    return (
        <View>
            <Text>{props.text}</Text>
        </View>
    );
}

export default Button;
