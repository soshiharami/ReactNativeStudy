import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Square from "./Square";

type Squares = {
    values: Array<'X' | 'O' | null>,
    xIsNext: boolean
}

function CalculateWinner(squares: Squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    for (let i = 0; i < lines.length; i++) {
        const [one, two, three] = lines[i]
        if (squares.values[one] && squares.values[one] === squares.values[two] && squares.values[one] === squares.values[three]) {
            return squares.values[one]
        }
    }
    return null
}

const Board: React.FC = () => {
    const initialSquares: Squares = {
        values: Array(9).fill(null),
        xIsNext: true
    }
    const [squares, setSquares] = React.useState(initialSquares)

    const winner = CalculateWinner(squares)
    let status: string
    if (winner) {
        status = 'Winner: ' + winner
    } else {
        status = 'Next player: ' + (squares.xIsNext ? 'X' : '0')
    }

    const renderSquare = (number: number) => {
        return <Square value={squares.values[number]} onPress={() => handlePress(number)}/>
    }

    const handlePress = (i: number) => {
        if (squares.values[i] == null && !winner) {
            const values = squares.values.slice()
            values[i] = squares.xIsNext ? 'X' : 'O'
            setSquares({
                values: values,
                xIsNext: !squares.xIsNext
            })
        }
    }

    const resetSquares = React.useCallback(
        () => setSquares(initialSquares), [setSquares, initialSquares]
    )

    return (
        <View style={styles.container}>
            <Text style={styles.status}>{status}</Text>
            <View style={styles.rowContainer}>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </View>
            <View style={styles.rowContainer}>
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </View>
            <View style={styles.rowContainer}>
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </View>
            <TouchableOpacity style={styles.reset}>
                <Text style={styles.text} onPress={resetSquares}>{"RESET"}</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginVertical: 10,
    },
    status: {
        marginBottom: 10
    },
    rowContainer: {
        flexDirection: 'row',
    },
    text: {
        fontSize: 24,
    },
    reset: {
        "borderWidth": 0,
        "borderColor": "black",
        "borderStyle": "solid",
        "borderTopLeftRadius": 5,
        "borderTopRightRadius": 5,
        "borderBottomRightRadius": 5,
        "borderBottomLeftRadius": 5,
        "backgroundColor": "#4676D7",
        "color": "#fff",
        "paddingTop": 8,
        "paddingRight": 16,
        "paddingBottom": 8,
        "paddingLeft": 16,
        "fontSize": 16
    }
})

export default Board;
