import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { ITeamRepo } from '../../Domain/RepoInterface/TeamRepo';
import { TeamApiService } from '../ApiService/CreateTeamApiService';
import { Params } from '../../../base/BaseModel/Params';
import { RequestResponse } from '../../../base/ServicesHandler/RequestResponse';
import { TeamEntity } from '../../Domain/Entites/Team';

@Injectable({ providedIn: 'root' })
export class TeamRepo implements ITeamRepo {
  constructor(private teamApiService: TeamApiService) {}

  async createTeam(params: Params): Promise<{ data: any; message: string }> {
    const Resdata = await firstValueFrom(this.teamApiService.createTeamApi(params));
    return {
      data: TeamEntity.fromMap(Resdata.data),
      message: Resdata.message,
    };
  }

  async EditTeam(params: Params): Promise<{ data: any; message: string }> {
    const Resdata = await firstValueFrom(this.teamApiService.editTeamApi(params));
    return {
      data: TeamEntity.fromMap(Resdata.data),
      message: Resdata.message,
    };
  }

  async deleteTeam(params: Params): Promise<{ data: any; message: string }> {
    const Resdata = await firstValueFrom(this.teamApiService.deleteTeamApi(params));
    return {
      data: TeamEntity.fromMap(Resdata.data),
      message: Resdata.message,
    };
  }

  async GetTeam(params: Params): Promise<{ data: any; message: string }> {
    const Resdata = await firstValueFrom(this.teamApiService.getTeamApi(params));
    return {
      data: TeamEntity.fromMap(Resdata.data),
      message: Resdata.message,
    };
  }

  async GetTeams(params: Params): Promise<{ data: any; message: string }> {
    const Resdata = await firstValueFrom(this.teamApiService.getTeamsApi(params));
    return {
      data: Resdata.data.map((el: any) => TeamEntity.fromMap(el)),
      message: Resdata.message,
    };
  }
}
