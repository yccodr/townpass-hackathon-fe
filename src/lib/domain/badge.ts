export type Description = {
  History: string;
  InCharge: string;
  LinkRef: string;
  MainDeity: string;
  WorshipOrder: string;
};

export type Badge = {
  iconPath: string;
  description: Description;
  acquired?: boolean;
};
