import { makeAutoObservable } from "mobx";
import { ITeamStore } from "../../application/ports";
import { networkStore } from "../../../../shared/networkStore";

export const teamStore = makeAutoObservable<ITeamStore>({
  ...networkStore,

  team: [],

  saveTeam(team) {
    this.team = team;
  },

  resetTeam() {
    this.team = [];
  },
});
