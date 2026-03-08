import { Params } from '../../../base/BaseModel/Params';
import { InjectionToken } from '@angular/core';

export interface ITeamRepo {
  createTeam(params: Params): Promise<{ data: any; message: string }>;
  EditTeam(params: Params): Promise<{ data: any; message: string }>;
  deleteTeam(params: Params): Promise<{ data: any; message: string }>;
  GetTeam(params: Params): Promise<{ data: any; message: string }>;
  GetTeams(Params: Params): Promise<{ data: any; message: string }>;
}

export const TEAM_REPO_TOKEN = new InjectionToken<ITeamRepo>('ITeamRepo');
