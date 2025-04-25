export interface IMenuItem {
  name: string;
  url: string;
}

export const MENU_DATA: IMenuItem[] = [
  {
    name: "о компании",
    url: "/about",
  },
  {
    name: "направлении",
    url: "/directions",
  },
  {
    name: "вакансии",
    url: "/vacancies",
  },
];
