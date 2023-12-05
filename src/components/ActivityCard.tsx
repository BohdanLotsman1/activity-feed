import React, { useContext } from "react";
import { CardContainer } from "./CardContainer";
import { IActivity } from "../types";
import { getTimeFromNow } from "../utils";
import { ACTIVITIES, secondary } from "../constants";
import styled from "styled-components";
import { Delete } from "@mui/icons-material";
import { ActivityContext } from "../context";

const HighlightedText = styled.span`
  color: ${secondary};
`;

const Header = styled.span`
  font-weight: 600;
  display: flex;
`;

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 8px;
`;

type Props = {
  icon: JSX.Element;
  activity: IActivity;
};

export default function ActivityCard({ icon, activity }: Props) {
  const { activities, setActivities } = useContext(ActivityContext);

  const isNote = activity.type === ACTIVITIES.NOTE;

  const handleDelete = () => {
    setActivities(activities.filter((item) => item.id !== activity.id));
  };

  return (
    <CardContainer icon={icon} time={getTimeFromNow(activity.created_at)}>
      <Card>
        <HeaderContainer>
          <Header>
            <HighlightedText>{activity.owner}</HighlightedText>
            &nbsp;
            {` ${isNote ? "added a" : "had a"} ${activity.type} ${
              isNote ? "with" : "to"
            } `}
            &nbsp;
            <HighlightedText>{activity.subject}</HighlightedText>
          </Header>
          {activity.text}
        </HeaderContainer>
        <Delete
          sx={{ color: "red", cursor: "pointer" }}
          onClick={handleDelete}
        />
      </Card>
    </CardContainer>
  );
}
