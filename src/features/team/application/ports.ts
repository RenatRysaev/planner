import { ITeam } from "../domain";
import { NetworkStore } from "../../../shared/ports";

export type ITeamApi = {
  getTeam: () => Promise<ITeam>;
};

export type ITeamStore = {
  team: ITeam;
  saveTeam: (team: ITeam) => void;
  resetTeam: () => void;
} & NetworkStore;
