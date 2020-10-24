import * as React from 'react';
import Board from "./Board";
import {SafeAreaView} from "react-native";

const Game: React.FC = () => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <Board/>
        </SafeAreaView>
    );
}

export default Game;
