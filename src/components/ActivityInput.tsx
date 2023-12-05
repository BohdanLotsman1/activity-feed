import React, {
  useEffect,
  useRef,
  ChangeEvent,
  useState,
  useContext,
} from "react";
import { IconContainer, iconStyle, CardContainer } from "./CardContainer";
import { FormatListBulleted } from "@mui/icons-material";
import styled from "styled-components";
import { ACTIVITIES, lightGrey, mock_owner, mock_subject, primary, secondary } from "../constants";
import { getActivityIcon } from "../utils";
import { ActivityContext } from "../context";
import { IActivity } from "../types";
import moment from "moment";

const Input = styled.textarea`
  width: 100%;
  background: white;
  border: 1px solid gray;
  border-radius: 3px;
  padding: 5px;
  box-sizing: border-box;
  resize: none;
  overflow: hidden;
  &:active {
    border: 1px solid ${primary};
  }
  &:focus {
    border: 1px solid ${primary};
    outline: none;
    box-shadow: 0 0 2px 2px ${primary};
  }
`;

const SubmitButton = styled.button`
  background: ${primary};
  color: white;
  font-size: 16px;
  padding: 10px 18px;
  align-self: flex-end
  box-sizing: border-box;
  border: none;
  cursor: pointer
`;

const ActivityIcons = styled.div`
  display: flex;
  gap: 10px;
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function ActivityInput() {
  const ref = useRef<HTMLTextAreaElement>(null);
  const [selectedActivity, setSelectedActivity] = useState(ACTIVITIES.NOTE);
  const [note, setNote] = useState("");
  const { activities, setActivities } = useContext(ActivityContext);

  const autoResize = () => {
    if (!ref.current) return;
    ref.current.style.height = "inherit";
    ref.current.style.height = `${ref.current.scrollHeight}px`;
  };

  useEffect(autoResize, []);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    autoResize();
    setNote(e.target.value);
  };

  const handleClick = (activity: ACTIVITIES) => () => {
    setSelectedActivity(activity);
  };

  const handleSubmit = () => {
    if (!note) return;
    const newActivity: IActivity = {
      id: Math.random(),
      owner: mock_owner,
      subject: mock_subject,
      text: note,
      type: selectedActivity,
      created_at: moment().format(),
    };
    setActivities([newActivity, ...activities]);
    setSelectedActivity(ACTIVITIES.NOTE);
    setNote("");
  };

  return (
    <CardContainer
      icon={<FormatListBulleted sx={{ ...iconStyle, color: lightGrey }} />}
    >
      <Input value={note} ref={ref} onChange={handleChange} />
      <FooterContainer>
        <ActivityIcons>
          {Object.values(ACTIVITIES).map((activity, index) => (
            <IconContainer
              key={index}
              style={{
                background: selectedActivity === activity ? secondary : "white",
                position: "initial",
                border:
                  selectedActivity === activity ? "1px solid transparent" : "",
                cursor: "pointer",
              }}
              onClick={handleClick(activity)}
            >
              {getActivityIcon(activity, {
                color: selectedActivity === activity ? "white" : lightGrey,
                ...iconStyle,
              })}
            </IconContainer>
          ))}
        </ActivityIcons>
        <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
      </FooterContainer>
    </CardContainer>
  );
}
