import { shallow, ShallowWrapper } from "enzyme";
import { History, HistoryProps } from "./History";

const props = {
  onClose: jest.fn(),
  setCurrentExpression: jest.fn(),
  setResult: jest.fn(),
  setHistoryData: jest.fn(),
  historyData: [{ expression: "3*5", result: 8 }, { expression: "4/3", result: 1.33}],
};

let wrapper: ShallowWrapper;
beforeEach(() => {
  wrapper = shallow(<History {...props} />);
});

afterEach(() => {
  jest.clearAllMocks();
});

it("should match snapshot", () => {
  wrapper = shallow(<History {...props} />);
  expect(wrapper).toMatchSnapshot();
});

it("should close on cross click", () => {
    const closeButton = wrapper.find(".history-close-btn");
    closeButton.simulate("click");
    expect(props.onClose).toHaveBeenCalledTimes(1);
});

it("should set current expression and record with the clicked record value", () => {
    const clickedRecord = props.historyData[0];
    const firstRecord = wrapper.find(".history-body").childAt(0);
    const mockEvent = {
        currentTarget: {
            children:[
                {innerHTML: clickedRecord.expression},
                {innerHTML: clickedRecord.result}
            ]
        }
    }
    firstRecord.simulate("click", mockEvent);
    expect(props.setCurrentExpression).toHaveBeenCalled();
    expect(props.setResult).toHaveBeenCalled();
    let actualArgument = props.setCurrentExpression.mock.calls[0][0];
    expect(actualArgument).toEqual(clickedRecord.expression);
    actualArgument = props.setResult.mock.calls[0][0];
    expect(actualArgument).toEqual(clickedRecord.result);
});

it("should clear all records when clear all button is  clicke", ()=> {
    const clearAllButton  = wrapper.find(".clear-history-btn");
    clearAllButton.simulate("click");
    expect(props.setHistoryData).toHaveBeenCalledWith([]);
})

