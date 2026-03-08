import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { ITeamRepo } from '../../Domain/RepoInterface/TeamRepo';
import { CreateTeamApiService } from '../ApiService/CreateTeamApiService';
import { Params } from '../../../base/BaseModel/Params';
import { RequestResponse } from '../../../base/ServicesHandler/RequestResponse';
import { TeamEntity } from '../../Domain/Entites/Team';

@Injectable({ providedIn: 'root' })
export class TeamRepo implements ITeamRepo {
  constructor(private createTeamApiService: CreateTeamApiService) {}

  async createTeam(params: Params): Promise<{ data: any; message: string }> {
    const Resdata = await firstValueFrom(this.createTeamApiService.createTeamApi(params));
    return {
      data: TeamEntity.fromMap(Resdata.data),
      message: Resdata.message,
    };
  }

  async EditTeam(params: Params): Promise<{ data: any; message: string }> {
    const Resdata = await firstValueFrom(this.createTeamApiService.editTeamApi(params));
    return {
      data: TeamEntity.fromMap(Resdata.data),
      message: Resdata.message,
    };
  }

  async deleteTeam(params: Params): Promise<{ data: any; message: string }> {
    const Resdata = await firstValueFrom(this.createTeamApiService.deleteTeamApi(params));
    return {
      data: TeamEntity.fromMap(Resdata.data),
      message: Resdata.message,
    };
  }

  async GetTeam(params: Params): Promise<{ data: any; message: string }> {
    const Resdata = await firstValueFrom(this.createTeamApiService.getTeamApi(params));
    return {
      data: TeamEntity.fromMap(Resdata.data),
      message: Resdata.message,
    };
  }

  async GetTeams(params: Params): Promise<{ data: any; message: string }> {
    const Resdata = await firstValueFrom(this.createTeamApiService.getTeamsApi(params));
    return {
      data: Resdata.data.map((el: any) => TeamEntity.fromMap(el)),
      message: Resdata.message,
    };
  }
}
