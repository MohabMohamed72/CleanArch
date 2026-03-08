import { Observable } from 'rxjs';
import { Params } from '../../../base/BaseModel/Params';
import { RequestResponse } from '../../../base/ServicesHandler/RequestResponse';
import { TeamEntity } from '../Entites/Team';

export interface ITeamRepo {
  createTeam(params: Params): any;
  EditTeam(params: Params): Promise<{ data: any; message: string }>;
  deleteTeam(params: Params): Promise<{ data: any; message: string }>;
  GetTeam(params: Params): Promise<{ data: any; message: string }>;
  GetTeams(Params: Params): Promise<{ data: any; message: string }>;
}
