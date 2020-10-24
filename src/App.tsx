import React, { FC } from "react";
import dayjs from "dayjs";
import "dayjs/locale/ja";
import Hello from "./Components/Hello";
import Board from "./Components/Board";

dayjs.locale("ja");

const App: FC = () => {
    return(
        <div>
            <Hello name={"soshi"}/>
            <Board/>
        </div>
    )
};

export default App;
