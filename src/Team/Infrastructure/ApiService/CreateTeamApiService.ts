import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Params } from '../../../base/BaseModel/Params';
import { ApiHandleService } from '../../../base/Services/ApiHandle/api-handle-service';
import { RequestResponse } from '../../../base/ServicesHandler/RequestResponse';
import { ApiNames } from '../../../base/ApiNames';
import { RequestTpeEnum } from '../../../base/ServicesHandler/RequestTpeEnum';
import { TeamEntity } from '../../Domain/Entites/Team';

@Injectable({ providedIn: 'root' })
export class CreateTeamApiService {
  constructor(private _ApiHandleService: ApiHandleService) {}

  createTeamApi(data: Params): Observable<RequestResponse<any>> {
    return this._ApiHandleService.sendHttpRequest<RequestResponse<any>>(
      ApiNames.Instance.FetchTeams,
      RequestTpeEnum.Post,
      data.toJson(),
    );
  }

  editTeamApi(data: Params): Observable<RequestResponse<any>> {
    return this._ApiHandleService.sendHttpRequest<RequestResponse<any>>(
      ApiNames.Instance.FetchTeams,
      RequestTpeEnum.Put,
      data.toJson(),
    );
  }

  deleteTeamApi(id: number): Observable<RequestResponse<any>> {
    return this._ApiHandleService.sendHttpRequest<RequestResponse<any>>(
      ApiNames.Instance.FetchTeams,
      RequestTpeEnum.Delete,
      { id },
    );
  }

  getTeamApi(id: number): Observable<RequestResponse<TeamEntity>> {
    return this._ApiHandleService.sendHttpRequest<RequestResponse<TeamEntity>>(
      ApiNames.Instance.FetchTeams,
      RequestTpeEnum.Get,
      { id },
    );
  }

  getTeamsApi(data: Params): Observable<RequestResponse<TeamEntity[]>> {
    return this._ApiHandleService.sendHttpRequest<RequestResponse<any>>(
      ApiNames.Instance.FetchTeams,
      RequestTpeEnum.Post,
      data.toJson(),
    );
  }
}
