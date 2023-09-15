import { Teacher } from "@/types";

const teachers: Teacher[] = [
  {
    id: 897632,
    hash: 1,
    fullName: "Firdavs Muzaffarov",
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
    fullName: "Brooklyn Simmons",
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
    fullName: "Firdavs Muzaffarov",
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
    fullName: "Guy Hawkins",
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
    fullName: "Floyd Miles",
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
    fullName: "Cameron Williamson",
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
    fullName: "Ronald Richards",
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
    fullName: "Devon Lane",
    status: "bekor qilindi",
    createdAt: `${new Date().getDate().toString()}-${
      new Date().getMonth() < 10
        ? "0" + new Date().getMonth().toString()
        : new Date().getMonth().toString()
    }-${new Date().getFullYear().toString()}`,
  },
];

export default teachers;
