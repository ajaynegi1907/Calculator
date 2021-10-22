import {Action} from "redux";
import { HistoryRecord } from "../components/History";

export interface ActionWithPayload extends Action {
payload: any;
}

export const AppActions = {
    SET_CURRENT_EXPRESSION: "SET_CURRENT_EXPRESSION",
    SET_RESULT: "SET_RESULT",
    SET_HISTORY_DATA:  "SET__HISTORY_DATA",
    SET_HISTORY_PANE_VISIBILITY: "SET_HISTORY_PANE_VISIBILITY",
    setCurrentExpression: (value: string) => ({
        type: AppActions.SET_CURRENT_EXPRESSION,
        payload: value
    }),
    setResult: (value?: number) => ({
        type: AppActions.SET_RESULT,
        payload: value
    }),
    setHistoryData: (record: HistoryRecord[]) => ({
        type: AppActions.SET_HISTORY_DATA,
        payload: record
    }),
    setHistoryPaneVisibility: (isVisibile: boolean) => ({
        type: AppActions.SET_HISTORY_PANE_VISIBILITY,
        payload: isVisibile
    })
} 