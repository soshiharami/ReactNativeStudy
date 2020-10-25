import * as React from 'react';
import {FC} from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Game from "./Game";
import Hello from "./Hello";

const { Navigator, Screen } = createBottomTabNavigator();

const MainNavigator: FC = () => {
    return(
        <Navigator initialRouteName="test">
            <Screen name={"Game"} component={Game}/>
            <Screen name={"Hello"} component={Hello}/>
        </Navigator>
    );
};

export default MainNavigator;

