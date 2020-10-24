import React, {FC} from "react";
import dayjs from "dayjs";
import "dayjs/locale/ja";
import Game from "./Components/Game";

dayjs.locale("ja");

const App: FC = () => {
    return(
            <Game/>
    )
};

export default App;
