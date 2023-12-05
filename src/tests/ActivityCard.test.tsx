import { render } from "@testing-library/react";
import ActivityCard from "../components/ActivityCard";
import { SportsBar } from "@mui/icons-material";
import { ACTIVITIES, mock_owner, mock_subject } from "../constants";
import { IActivity } from "../types";


describe('ActivityCard', () => {
    const testData: IActivity = {
        id: Math.random(),
        owner: mock_owner,
        subject: mock_subject,
        text: 'Hello world',
        type: ACTIVITIES.BEER,
        created_at: '2023-12-05T23:47:31+02:00'
      };
  it('renders correctly', () => {
    
    const { container } = render(<ActivityCard icon={<SportsBar/>} activity={testData} />);
    expect(container).toMatchSnapshot();
  });
});