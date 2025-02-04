export * from "./table";

export interface RowDataForAuditLog {
  date_and_time: string;
  user: string;
  role: string;
  action: string;
  imgUrl: string;
}

export interface RowDataForSubscription {
  id: string;
  name: string;
  imgUrl: string;
  amount: string;
  purchaseDate: string;
  expiration: "Premium" | "Standard" | "Customized";
  subscription: "Premium" | "Standard" | "Customized";
  admin: string;
}
