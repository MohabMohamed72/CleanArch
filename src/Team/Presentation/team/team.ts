import { ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CreateTeamUsecase } from '../../Application/Usecases/CreateTeamUsecase';
import { TeamEntity } from '../../Domain/Entites/Team';
import { CommonModule, JsonPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-team',
  imports: [JsonPipe, NgIf],
  templateUrl: './team.html',
  styleUrl: './team.css',
  providers: [CreateTeamUsecase],
})
export class Team implements OnInit {
  constructor(
    private teamUsecase: CreateTeamUsecase,
    private cdr: ChangeDetectorRef,
  ) {}
  public Data: any;
  public TeamParams = new TeamEntity({
    id: 0,
    title: '',
  });
  public loading = true;

  async GetTeams() {
    this.Data = await this.teamUsecase.GetTeams(this.TeamParams);
    this.loading = false;
    this.cdr.detectChanges();
  }
  ngOnInit() {
    this.GetTeams();
  }
}
