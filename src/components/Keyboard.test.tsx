import { shallow, ShallowWrapper } from "enzyme";
import Keyboard, { KeyboardProps } from "./Keyboard";

const props: KeyboardProps = {
    onTokenButtonClick: jest.fn(),
    clearAll: jest.fn(),
    removePreviousToken: jest.fn(),
    calculateResultClick: jest.fn(),
  };
let wrapper: ShallowWrapper;
beforeEach( () => {
     wrapper = shallow(<Keyboard {...props} />);
})

afterEach(() => {
    jest.clearAllMocks();
})

it("should match snapshot", () => {
  expect(wrapper).toMatchSnapshot();
});

it("should call clear all when AC button is clicked", () => {
  const acButton = wrapper.find(".keyboard").childAt(0);
  const mockEvent = {
    target:{
      innerHTML: "AC"
    }
  };
  acButton.simulate("click", mockEvent);
  expect(props.clearAll).toHaveBeenCalled();
});

it("should call calculateResultClick when = button is clicked", () => {
  const calculateButton = wrapper.find(".keyboard").childAt(18);
  const mockEvent = {
    target:{
      innerHTML: "="
    }
  };
  calculateButton.simulate("click", mockEvent);
  expect(props.calculateResultClick).toHaveBeenCalled();
});

it("should call onTokenButtonClick when any token button is clicked", () => {
  const tokenButton = wrapper.find(".keyboard").childAt(4);
  const mockEvent = {
    target:{
      innerHTML: 7
    }
  };
  tokenButton.simulate("click", mockEvent);
  expect(props.onTokenButtonClick).toHaveBeenCalledWith(7);
});

it("should call removePreviousToken when CE button is clicked", () => {
  const keyboard = wrapper.find(".keyboard").childAt(1);
  const mockEvent = {
    target:{
      innerHTML: "CE"
    }
  };
  keyboard.simulate("click", mockEvent);
  expect(props.removePreviousToken).toHaveBeenCalled();
});
