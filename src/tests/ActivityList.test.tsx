import { render } from "@testing-library/react";
import { SportsBar } from "@mui/icons-material";
import { CardContainer } from "../components/CardContainer";
import ActivityList from "../components/ActivityList";

describe("ActivityList", () => {
  it("renders correctly", () => {
    const { container } = render(
      <ActivityList />
    );
    expect(container).toMatchSnapshot();
  });
});
