import { useDispatch, useSelector } from "react-redux";
import App, { AppProps } from "./App";
import { HistoryRecord } from "./components/History";
import { AppActions } from "./stateManagement/actions";
import { AppState } from "./stateManagement/reducer";



export const  AppContainer = () => {
    const dispatch = useDispatch();
    const props: AppProps = {
      expression:  useSelector((state: AppState) => state.expression),
     isHistoryVisible :useSelector((state: AppState) => state.historyPaneVisibility),
     historyData : useSelector((state: AppState) => state.historyData),
     setHistoryData : (historyData: HistoryRecord[]) => dispatch(AppActions.setHistoryData( historyData )),
     setCurrentExpression : (value: string) => dispatch(AppActions.setCurrentExpression(value)),
     setResult : (value?: number) => dispatch(AppActions.setResult(value)),
     setHistoryPaneVisibility : (isVisible: boolean) => dispatch(AppActions.setHistoryPaneVisibility(isVisible))
    };
    
    return (
        <App {...props} />
    );
}

