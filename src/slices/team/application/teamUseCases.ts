import { ITeamApi, ITeamStore } from "./ports";
import { teamApi, teamStore } from "../services";
import { User } from "../../user/domain";
import { HttpStatus } from "shared/enums/httpStatus";

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

  public addTeamMember = async (teamMember: User) => {
    try {
      this.teamStore.setIsLoading(true);

      const responseStatus = await this.teamApi.addTeamMember(teamMember);

      if (responseStatus === HttpStatus.created) {
        this.teamStore.saveTeam(this.teamStore.team.concat(teamMember));
        // notification about success add
      } else {
        // notification about failure add
      }
    } catch (error) {
      this.teamStore.setLoadingError(String(error));
    } finally {
      this.teamStore.setIsLoading(false);
    }
  };

  public removeTeamMember = async (teamMemberId: UniqueId) => {
    try {
      this.teamStore.setIsLoading(true);

      const responseStatus = await this.teamApi.removeTeamMember(teamMemberId);

      if (responseStatus === HttpStatus.ok) {
        const newTeam = this.teamStore.team.filter(
          (teamMember) => teamMember.id !== teamMemberId
        );
        this.teamStore.saveTeam(newTeam);
        // notification about success add
      } else {
        // notification about failure add
      }
    } catch (error) {
      this.teamStore.setLoadingError(String(error));
    } finally {
      this.teamStore.setIsLoading(false);
    }
  };

  public editTeamMember = async (editingTeamMember: User) => {
    try {
      this.teamStore.setIsLoading(true);

      const responseStatus = await this.teamApi.editTeamMember(
        editingTeamMember
      );

      if (responseStatus === HttpStatus.ok) {
        const newTeam = this.teamStore.team.map((teamMember) =>
          teamMember.id === editingTeamMember.id
            ? editingTeamMember
            : teamMember
        );
        this.teamStore.saveTeam(newTeam);
        // notification about success add
      } else {
        // notification about failure add
      }
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
