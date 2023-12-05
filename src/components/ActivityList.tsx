import React, { useContext } from "react";
import ActivityCard from "./ActivityCard";
import styled from "styled-components";
import { getActivityIcon } from "../utils";
import { iconStyle } from "./CardContainer";
import { ActivityContext } from "../context";
import { lightGrey } from "../constants";

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export default function ActivityList() {
  const { activities } = useContext(ActivityContext);

  if (!activities.length) return null;

  return (
    <List>
      {activities.map((activity) => (
        <ActivityCard
          activity={activity}
          icon={getActivityIcon(activity.type, {
            ...iconStyle,
            color: lightGrey,
          })}
          key={activity.created_at}
        />
      ))}
    </List>
  );
}
