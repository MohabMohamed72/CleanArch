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
      data: Resdata.data.map((el: any) => TeamEntity.fromMap(el)),
      message: Resdata.message,
    };
  }

  EditTeam(params: Params): Observable<RequestResponse<any>> {
    return this.createTeamApiService.editTeamApi(params);
  }

  deleteTeam(id: number): Observable<RequestResponse<any>> {
    return this.createTeamApiService.deleteTeamApi(id);
  }

  GetTeam(id: number): Observable<RequestResponse<TeamEntity>> {
    return this.createTeamApiService.getTeamApi(id);
  }

  async GetTeams(params: Params): Promise<{ data: any; message: string }> {
    const Resdata = await firstValueFrom(this.createTeamApiService.getTeamsApi(params));
    return {
      data: Resdata.data.map((el: any) => TeamEntity.fromMap(el)),
      message: Resdata.message,
    };
  }
}
