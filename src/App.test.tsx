import App, { AppProps } from "./App";
import { shallow, ShallowWrapper } from "enzyme";

let wrapper: ShallowWrapper;
const props: AppProps = {
  expression: "",
  historyData: [],
  isHistoryVisible: false,
  setHistoryData: jest.fn(),
  setCurrentExpression: jest.fn(),
  setResult: jest.fn(),
  setHistoryPaneVisibility: jest.fn(),
};

beforeEach(() => {
  wrapper = shallow(<App {...props} />);
});

afterEach(() => {
  jest.clearAllMocks();
});

it("should match snapshot", () => {
  expect(wrapper).toMatchSnapshot();
});

it("should toggle history pane when history button is clicked", () => {
  const historyButton = wrapper.find(".show-history-btn");
  historyButton.simulate("click");
  const mockedMethod = (props.setHistoryPaneVisibility) as jest.Mock;
  expect(mockedMethod.mock.calls[0][0]).toBeTruthy();
  // wrapper.setProps({ isHistoryVisible: true });
  // historyButton.simulate("click");
  // console.log(mockedMethod.mock.calls)
  // expect(mockedMethod.mock.calls[1][0]).toBeFalsy();
});
