import {
  ChatBubbleRounded,
  FreeBreakfastRounded,
  LocalPhoneRounded,
  PersonRounded,
  SportsBarRounded,
} from "@mui/icons-material";
import { ACTIVITIES } from "./constants";
import moment from "moment";

export const getActivityIcon = (
  activity: string,
  styles?: React.CSSProperties
) => {
  switch (activity) {
    case ACTIVITIES.NOTE:
      return <ChatBubbleRounded sx={styles} />;
    case ACTIVITIES.BEER:
      return <SportsBarRounded sx={styles} />;
    case ACTIVITIES.CALL:
      return <LocalPhoneRounded sx={styles} />;
    case ACTIVITIES.COFFEE:
      return <FreeBreakfastRounded sx={styles} />;
    case ACTIVITIES.MEETING:
      return <PersonRounded sx={styles} />;
    default:
      return <ChatBubbleRounded sx={styles} />;
  }
};

export const getTimeFromNow = (time: string) => {
  const duration = moment.duration(moment().diff(moment(time)));

  return duration.years() > 0
    ? `${duration.years()}y`
    : duration.months() > 0
    ? `${duration.months()}M`
    : duration.days() > 0
    ? `${duration.days()}d`
    : duration.hours() > 0
    ? `${duration.hours()}h`
    : duration.minutes() > 0
    ? `${duration.minutes()}m`
    : duration.seconds() > 0
    ? `${duration.seconds()}s`
    : "now";
};
