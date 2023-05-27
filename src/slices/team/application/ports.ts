import { ITeam } from "../domain";
import { INetworkStore } from "shared/ports";
import { HttpStatus } from "shared/enums/httpStatus";
import { User } from "../../user/domain";

export type ITeamApi = {
  getTeam: () => Promise<ITeam>;
  addTeamMember: (teamMember: User) => Promise<HttpStatus>;
  removeTeamMember: (teamMemberId: UniqueId) => Promise<HttpStatus>;
  editTeamMember: (teamMember: User) => Promise<HttpStatus>;
};

export type ITeamStore = {
  team: ITeam;
  saveTeam: (team: ITeam) => void;
  resetTeam: () => void;
} & INetworkStore;
