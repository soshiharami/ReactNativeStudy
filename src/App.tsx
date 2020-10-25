import React, {FC} from "react";
import dayjs from "dayjs";
import "dayjs/locale/ja";
import MainNavigator from "./Components/MainNavigator";
import {NavigationContainer} from "@react-navigation/native";

dayjs.locale("ja");

const App: FC = () => {
    return(
        <NavigationContainer>
            <MainNavigator/>
        </NavigationContainer>
    )
};

export default App;
