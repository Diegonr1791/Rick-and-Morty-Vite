export type filterKeys = "name" | "status" | "species" | "gender";
export type Filters = {
  [key in Partial<filterKeys>]: string;
};
