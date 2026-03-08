import { ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CreateTeamUsecase } from '../../Application/Usecases/CreateTeamUsecase';
import { TeamEntity } from '../../Domain/Entites/Team';
import { CommonModule, JsonPipe, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-team',
  imports: [JsonPipe, NgIf, FormsModule],
  templateUrl: './team.html',
  styleUrl: './team.css',
  providers: [CreateTeamUsecase],
})
export class Team implements OnInit {
  constructor(
    private teamUsecase: CreateTeamUsecase,
    private cdr: ChangeDetectorRef,
  ) {}
  public teamTitle: string = '';

  public Data: any;
  public TeamParams = new TeamEntity({
    title: this.teamTitle,
  });
  public loading = true;

  updateTitle(event: Event) {
    const input = event.target as HTMLInputElement;
    this.teamTitle = input.value;
    this.TeamParams = new TeamEntity({
      title: this.teamTitle,
    });
  }
  async GetTeams() {
    this.Data = await this.teamUsecase.GetTeams(this.TeamParams);
    this.loading = false;
    this.cdr.detectChanges();
  }

  async CreatTeam() {
    await this.teamUsecase.CreateTeam(this.TeamParams);
    this.GetTeams();
    this.cdr.detectChanges();
  }

  public EditteamTitle: string = '';
  public SelectedId: number = 0;
  setSelectedId(id: number, title: string) {
    this.SelectedId = id;
    this.EditteamTitle = title;
  }
  updateTitleEdit(event: Event) {
    const input = event.target as HTMLInputElement;
    this.EditteamTitle = input.value;
    this.TeamParams = new TeamEntity({
      id: this.SelectedId,
      title: this.EditteamTitle,
    });
  }

  async EditTeam() {
    await this.teamUsecase.EditTeam(this.TeamParams);
    this.GetTeams();
    this.cdr.detectChanges();
  }

  async deleteTeam(event: number) {
    this.TeamParams = new TeamEntity({
      id: Number(event),
    });
    await this.teamUsecase.DeleteTeam(this.TeamParams);
    this.GetTeams();
    this.cdr.detectChanges();
  }

  public teamDetails: TeamEntity = new TeamEntity();
  async ShowTeam(event: number) {
    this.TeamParams = new TeamEntity({
      id: Number(event),
    });
    const data = await this.teamUsecase.GetTeam(this.TeamParams);
    this.teamDetails = data;
    this.cdr.detectChanges();
  }

  ngOnInit() {
    this.GetTeams();
  }
}
