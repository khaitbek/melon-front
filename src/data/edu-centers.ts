import { EduCenter } from "@/types";

const eduCenters: EduCenter[] = [
  {
    id: 897632,
    hash: 1,
    name: "Muallim",
    status: "tasdiqlangan",
    createdAt: `${new Date().getDate().toString()}-${
      new Date().getMonth() < 10
        ? "0" + new Date().getMonth().toString()
        : new Date().getMonth().toString()
    }-${new Date().getFullYear().toString()}`,
  },
  {
    id: 345782,
    hash: 2,
    name: "Muallim",
    status: "tasdiqlanmagan",
    createdAt: `${new Date().getDate().toString()}-${
      new Date().getMonth() < 10
        ? "0" + new Date().getMonth().toString()
        : new Date().getMonth().toString()
    }-${new Date().getFullYear().toString()}`,
  },
  {
    id: 897678,
    hash: 3,
    name: "Muallim",
    status: "ko'rilmoqda",
    createdAt: `${new Date().getDate().toString()}-${
      new Date().getMonth() < 10
        ? "0" + new Date().getMonth().toString()
        : new Date().getMonth().toString()
    }-${new Date().getFullYear().toString()}`,
  },
  {
    id: 653216,
    hash: 4,
    name: "Muallim",
    status: "bekor qilindi",
    createdAt: `${new Date().getDate().toString()}-${
      new Date().getMonth() < 10
        ? "0" + new Date().getMonth().toString()
        : new Date().getMonth().toString()
    }-${new Date().getFullYear().toString()}`,
  },
  {
    id: 562334,
    hash: 5,
    name: "Muallim",
    status: "yangi",
    createdAt: `${new Date().getDate().toString()}-${
      new Date().getMonth() < 10
        ? "0" + new Date().getMonth().toString()
        : new Date().getMonth().toString()
    }-${new Date().getFullYear().toString()}`,
  },
  {
    id: 897123,
    hash: 6,
    name: "Muallim",
    status: "tasdiqlanmagan",
    createdAt: `${new Date().getDate().toString()}-${
      new Date().getMonth() < 10
        ? "0" + new Date().getMonth().toString()
        : new Date().getMonth().toString()
    }-${new Date().getFullYear().toString()}`,
  },
  {
    id: 897475,
    hash: 7,
    name: "Muallim",
    status: "tasdiqlangan",
    createdAt: `${new Date().getDate().toString()}-${
      new Date().getMonth() < 10
        ? "0" + new Date().getMonth().toString()
        : new Date().getMonth().toString()
    }-${new Date().getFullYear().toString()}`,
  },
  {
    id: 897632,
    hash: 8,
    name: "Muallim",
    status: "bekor qilindi",
    createdAt: `${new Date().getDate().toString()}-${
      new Date().getMonth() < 10
        ? "0" + new Date().getMonth().toString()
        : new Date().getMonth().toString()
    }-${new Date().getFullYear().toString()}`,
  },
];

export default eduCenters;
