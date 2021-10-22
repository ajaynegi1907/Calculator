import { shallow } from "enzyme";
import Display, { DisplayProps } from "./Display";

const props: DisplayProps = {
    expression: "4+5",
    result: 9
};

it("should match snapshot", () => {
    const wrapper  = shallow(<Display {...props} />);
    expect(wrapper).toMatchSnapshot();
})

it("should render empty string as result when result is undefined", () => {
    const customProps: DisplayProps = {
        expression: "4 + 5"
    }

    const wrapper = shallow(<Display {...customProps} />);
    const resultDivContent = wrapper.find(".display-result").getElement().props.children;

    expect(resultDivContent).toEqual(" ");
});