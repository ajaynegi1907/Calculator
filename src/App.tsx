import "./App.css";
import Keyboard from "./components/Keyboard";
import { HistoryRecord } from "./components/History";
import { DisplayContainer } from "./containers/DisplayContainer";
import { HistoryContainer } from "./containers/History-container";
export interface AppProps{
  expression: string;
  historyData: HistoryRecord[];
  isHistoryVisible: boolean;
  setHistoryData: (data: HistoryRecord[]) => void;
  setCurrentExpression: (value: string) => void;
  setResult: (value?: number) => void;
  setHistoryPaneVisibility: (value: boolean) => void;
}

function App(props: AppProps) {
 
  const { expression, historyData} = props;
  const calculateResultClick = () => {
      try{
        const value: number = eval(expression);
        if(value !== undefined){
          if(!isFinite(value))
          alert("Invalid expression !!");
          else {
            const record: HistoryRecord = {expression: expression, result: value};
            historyData.push(record);
            props.setHistoryData(historyData);
            props.setCurrentExpression(value.toString());
            props.setResult(undefined);
          }
        }
      }
      catch{
        alert("Invalid expression !!");
      }
  }

  const clearAll = () => {
    props.setCurrentExpression("");
    props.setResult(undefined);
  }

  const removePreviousToken = () => {
    if(expression.length > 0){
      let updatedExpression = expression.slice(0, -1);
      try{
        const result: number = eval(updatedExpression);
        if(isFinite(result))
          props.setResult(result);
        else
          props.setResult(undefined);
      }
      catch{
        props.setResult(undefined);
      }
      props.setCurrentExpression(updatedExpression);
    }
  }

  const onAddTokenToExpression = (token: string) => {
    let updatedExpression = expression.concat(token);
   props.setCurrentExpression(updatedExpression);
    try{
      const result: number = eval(updatedExpression);
      if(isFinite(result))
        props.setResult(result);
    }
    catch{
      props.setResult(undefined);
    }
  }

  const toggleHistoryPaneVisibility = () => {
    props.setHistoryPaneVisibility(!props.isHistoryVisible);
  }

  return (
      <div className="App">
        <button onClick={toggleHistoryPaneVisibility} className= "show-history-btn">History </button>
        <DisplayContainer />
        <Keyboard calculateResultClick ={calculateResultClick} clearAll={clearAll} removePreviousToken={removePreviousToken} onTokenButtonClick={onAddTokenToExpression}/>
        {props.isHistoryVisible && <HistoryContainer onClose= {toggleHistoryPaneVisibility}  />}
      </div>
  );
}

export default App;
