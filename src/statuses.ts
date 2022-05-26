import { Statuses } from "./types";

export const statuses: Statuses = {
  STARTED: "started",
  PAUSED: "paused",
  RESUMED: "resumed",
  COMPLETED: "completed",
} as const;
