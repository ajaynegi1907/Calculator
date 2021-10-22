import { useDispatch, useSelector } from "react-redux";
import { HistoryProps, HistoryRecord, History } from "../components/History";
import { AppActions } from "../stateManagement/actions";
import { AppState } from "../stateManagement/reducer"

export const HistoryContainer = ({onClose}: {onClose: () => void}) => {
    const dispatch = useDispatch();
    const props: HistoryProps = {
        setCurrentExpression: (expression: string) => dispatch(AppActions.setCurrentExpression(expression)),
        setResult: (result?: number) => dispatch(AppActions.setResult(result)),
        setHistoryData : (historyData: HistoryRecord[]) => dispatch(AppActions.setHistoryData( historyData )),
        historyData: useSelector( (state: AppState) => state.historyData),
        onClose
    };

    return (
        <History {...props} />
    );
}