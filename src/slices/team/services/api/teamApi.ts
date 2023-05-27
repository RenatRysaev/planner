import { ITeamApi } from "../../application/ports";
import { ITeam } from "../../domain";
import { HttpStatus } from "shared/enums/httpStatus";

const fakeTeam: ITeam = [
  {
    id: "1",
    email: "admin@gmail.com",
    name: "I am admin motherfucka",
    role: "admin",
  },
  {
    id: "2",
    email: "2@gmail.com",
    name: "2name",
    role: "reader",
  },
  {
    id: "3",
    email: "3@gmail.com",
    name: "3name",
    role: "reader",
  },
];

export const teamApi: ITeamApi = {
  getTeam: () =>
    new Promise<ITeam>((resolve) => {
      setTimeout(() => {
        resolve(fakeTeam);
      }, 1500);
    }),

  addTeamMember: (teamMember) =>
    new Promise<HttpStatus>((resolve) => {
      setTimeout(() => {
        resolve(201);
      }, 1500);
    }),

  removeTeamMember: (teamMemberId) =>
    new Promise<HttpStatus>((resolve) => {
      setTimeout(() => {
        resolve(200);
      }, 1500);
    }),

  editTeamMember: (teamMember) =>
    new Promise<HttpStatus>((resolve) => {
      setTimeout(() => {
        resolve(200);
      }, 1500);
    }),
};
