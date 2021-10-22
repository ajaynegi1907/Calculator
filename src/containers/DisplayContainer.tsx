import { useSelector } from "react-redux";
import Display, { DisplayProps } from "../components/Display";
import { AppState } from "../stateManagement/reducer";

export const  DisplayContainer = () => {
    const props: DisplayProps = {
     expression: useSelector((state: AppState) => state.expression),
     result : useSelector((state: AppState) => state.result)
    }

    return (
        <Display {...props} />
    );
    
}