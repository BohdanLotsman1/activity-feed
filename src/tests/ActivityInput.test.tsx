import { render } from "@testing-library/react";
import ActivityInput from "../components/ActivityInput";


describe('ActivityInput', () => {
  it('renders correctly', () => {
    const { container } = render(<ActivityInput />);
    expect(container).toMatchSnapshot();
  });
});