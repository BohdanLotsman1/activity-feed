import { ACTIVITIES } from "./constants";

export interface IActivity {
  id: number;
  owner: string;
  subject: string;
  text: string;
  type: ACTIVITIES;
  created_at: string;
}
