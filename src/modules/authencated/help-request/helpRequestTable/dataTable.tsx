// data.ts
import { HelpRequest } from "./types";
import UserImg1 from "../../../../assets/image/userImg1.svg";
import UserImg2 from "../../../../assets/image/userImg2.svg";

const helpRequests: HelpRequest[] = [
  {
    ticketId: "2136789",
    user: { name: "Sarah Elohor", image: UserImg1 },
    category: "Bug Report",
    dateSubmitted: "Jan 12, 2024",
    status: "Open Request",
  },
  {
    ticketId: "2136789",
    user: { name: "Lydia Edward", image: UserImg2 },
    category: "Bug Report",
    dateSubmitted: "Jan 12, 2024",
    status: "Open Request",
  },
  {
    ticketId: "2136789",
    user: { name: "Lydia Edward", image: UserImg2 },
    category: "Bug Report",
    dateSubmitted: "Jan 12, 2024",
    status: "Open Request",
  },
];

export default helpRequests;
