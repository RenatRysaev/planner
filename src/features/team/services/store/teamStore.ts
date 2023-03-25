import { ITeamStore } from "../../application/ports";
import { makeAutoObservable } from "mobx";

const emptyTeam: ITeamStore["team"] = [];

class TeamStore implements ITeamStore {
  public team: ITeamStore["team"] = emptyTeam;
  public isLoading: ITeamStore["isLoading"] = false;
  public loadingError: ITeamStore["loadingError"] = "";

  constructor() {
    makeAutoObservable(this);
  }

  public saveTeam(team: ITeamStore["team"]) {
    this.team = team;
  }

  public resetTeam() {
    this.team = [];
  }

  public setLoadingError(error: string) {
    this.loadingError = error;
  }

  public setIsLoading(isLoading: boolean) {
    this.isLoading = isLoading;
  }
}

export const teamStore = new TeamStore();
