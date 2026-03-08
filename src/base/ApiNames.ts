import { environment } from './environments/environment.development';

export class ApiNames {
  private baseUrl: string = environment.apiUrl;
  private prefix: string = '';

  private static _instance: ApiNames;
  private constructor() {}
  public static get Instance(): ApiNames {
    if (!this._instance) {
      this._instance = new ApiNames();
    }
    return this._instance;
  }

  get Register() {
    return this.baseUrl + this.prefix + 'register';
  }
  get Login() {
    return this.baseUrl + this.prefix + 'login';
  }

  get FetchTeams() {
    return this.baseUrl + this.prefix + 'fetch_teams';
  }
  get CreateTeam() {
    return this.baseUrl + this.prefix + 'create_team';
  }
  get EditTeam() {
    return this.baseUrl + this.prefix + 'update_team';
  }
  get DeleteTeam() {
    return this.baseUrl + this.prefix + 'delete_team';
  }
  get TeamDetails() {
    return this.baseUrl + this.prefix + 'fetch_team_details';
  }
}
