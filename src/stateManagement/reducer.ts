import { HistoryRecord } from "../components/History";
import { ActionWithPayload, AppActions } from "./actions";

export interface AppState{
    result?: number;
    expression: string;
    historyPaneVisibility: boolean;
    historyData: HistoryRecord[];
}

const initialState: AppState = {
    result: undefined,
    expression: "",
    historyPaneVisibility: false,
    historyData: []
}

export const appReducer = (state: AppState = initialState, action: ActionWithPayload) => {
    switch(action.type){
        case AppActions.SET_RESULT:{
            return {
                ...state,
                result: action.payload
            }
        }
        case AppActions.SET_CURRENT_EXPRESSION:{
            return{
                ...state,
                expression: action.payload
            }
        }
        case AppActions.SET_HISTORY_DATA: {
            return{
                ...state,
                historyData: action.payload
            }
        }
        case AppActions.SET_HISTORY_PANE_VISIBILITY: {
            return {
                ...state,
                historyPaneVisibility: action.payload
            }
        }
        default:
            return state;
    }
}