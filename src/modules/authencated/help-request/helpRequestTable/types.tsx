export type HelpRequest = {
  ticketId: string;
  user: {
    name: string;
    image: string;
  };
  category: string;
  dateSubmitted: string;
  status: "Open Request";
};
