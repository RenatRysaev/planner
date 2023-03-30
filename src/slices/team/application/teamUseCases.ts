import { ITeamApi, ITeamStore } from "./ports";
import { teamStore, teamApi } from "../services";

export class TeamUseCases {
  private teamStore: ITeamStore;
  private teamApi: ITeamApi;

  constructor({
    dependencies,
  }: {
    dependencies: { teamStore: ITeamStore; teamApi: ITeamApi };
  }) {
    this.teamStore = dependencies.teamStore;
    this.teamApi = dependencies.teamApi;
  }

  public getTeam = async () => {
    try {
      this.teamStore.setIsLoading(true);

      const team = await this.teamApi.getTeam();
      this.teamStore.saveTeam(team);
    } catch (error) {
      this.teamStore.setLoadingError(String(error));
    } finally {
      this.teamStore.setIsLoading(false);
    }
  };
}

export const teamUseCases = new TeamUseCases({
  dependencies: { teamStore, teamApi },
});
