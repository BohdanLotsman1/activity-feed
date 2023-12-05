import { render } from "@testing-library/react";
import { SportsBar } from "@mui/icons-material";
import { CardContainer } from "../components/CardContainer";

describe("CardContainer", () => {
  it("renders correctly", () => {
    const { container } = render(
      <CardContainer icon={<SportsBar />} time="1d">
        <div>text</div>
      </CardContainer>
    );
    expect(container).toMatchSnapshot();
  });
});
