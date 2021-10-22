export interface HistoryRecord {
    expression: string;
    result: number;
}

export interface HistoryProps {
onClose: () => void;
setCurrentExpression: (expression: string) => void;
setResult: (value?: number) => void;
setHistoryData: (data: HistoryRecord[]) => void;
historyData: HistoryRecord[];
}

export const History = (props:HistoryProps) => {
    
    const onRecordClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void =>{
        const target = event.currentTarget;
        const expression = target.children[0].innerHTML;
        const result = parseInt(target.children[1].innerHTML);
        props.setCurrentExpression(expression);
        props.setResult(result);
    }

    const onClearAllClick = () => {
        props.setHistoryData([]);
    }

    const recordList = props.historyData.map( (item, i) => {
        return (
            <div key={i} className = "history-record" onClick= {onRecordClick}>
                <div className="expression">{item.expression}</div>
                <div className="result"> {item.result}</div>
            </div>
        )
    });
    return (
        <div className="history-container">
            <div className="history-close-btn" onClick={props.onClose}>X</div>
            <div className="history-body">{recordList}</div>
            <button className="clear-history-btn" onClick={onClearAllClick}>Clear all</button>
        </div>
    );
}