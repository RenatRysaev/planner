import { makeAutoObservable } from "mobx";
import { ITeamStore } from "../../application/ports";
import { networkStore } from "shared/networkStore";
import { User } from "slices/user/domain";

const emptyUser: User = { name: "", id: "", email: "", role: "reader" };

export const teamStore = makeAutoObservable<ITeamStore>({
  ...networkStore,

  team: [],

  saveTeam(team) {
    this.team = team;
  },

  resetTeam() {
    this.team = [];
  },

  getTeamMemberById(id) {
    const teamMember = this.team.find((member) => member.id === id);
    return teamMember || emptyUser;
  },
});
