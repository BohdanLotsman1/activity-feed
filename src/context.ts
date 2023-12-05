import { createContext } from "react";
import { IActivity } from "./types";

export type GlobalContent = {
  activities: IActivity[];
  setActivities: (activity: IActivity[]) => void;
};
export const ActivityContext = createContext<GlobalContent>({
  activities: [],
  setActivities: () => {},
});
