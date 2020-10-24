import React, {FC} from "react";
import dayjs from "dayjs";
import "dayjs/locale/ja";
import Game from "./Components/Game";
import Hello from "./Components/Hello";
import {View} from "react-native";

dayjs.locale("ja");

const App: FC = () => {
    return(
        <View>
            <Game/>
            <Hello name={"soshi"}/>
        </View>
    )
};

export default App;
