
import { ReactNode } from "react";

export type IStaffCards = {
  title: string;
  parcels: number;
  icon: ReactNode;
  bgcolor: string;
  color: string;
  border?: string;
  textColor?: string;
  percent?: string;
};
