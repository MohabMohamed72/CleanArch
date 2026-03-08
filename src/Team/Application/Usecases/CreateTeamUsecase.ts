import { Injectable } from '@angular/core';
import { TeamRepo } from '../../Infrastructure/Repos/CreateTeamRepo';
import { Params } from '../../../base/BaseModel/Params';
import { DialogHanlde } from '../../../base/DialogsHanlde/DialogsState';

@Injectable({ providedIn: 'root' })
export class CreateTeamUsecase {
  constructor(
    private TeamRepo: TeamRepo,
    private dialogHndler: DialogHanlde,
  ) {}

  async GetTeams(params: Params) {
    try {
      const res = await this.TeamRepo.GetTeams(params);
      this.dialogHndler.openDialog(res.message, '', '200ms', '300ms');
      setTimeout(() => {
        this.dialogHndler.closeDialog();
      }, 1000);
      return res.data;
    } catch (err: any) {
      this.dialogHndler.openDialog(err.message, '', '200ms', '300ms');
      setTimeout(() => this.dialogHndler.closeDialog(), 2000);
      return null;
    }
  }

  async CreateTeam(params: Params) {
    try {
      const res = await this.TeamRepo.createTeam(params);
      this.dialogHndler.openDialog(res.message, '', '200ms', '300ms');
      setTimeout(() => {
        this.dialogHndler.closeDialog();
      }, 1000);
      return res.data;
    } catch (err: any) {
      this.dialogHndler.openDialog(err.message, '', '200ms', '300ms');
      setTimeout(() => this.dialogHndler.closeDialog(), 2000);
      return null;
    }
  }

  async EditTeam(params: Params) {
    try {
      const res = await this.TeamRepo.EditTeam(params);
      this.dialogHndler.openDialog(res.message, '', '200ms', '300ms');
      setTimeout(() => {
        this.dialogHndler.closeDialog();
      }, 1000);
      return res.data;
    } catch (err: any) {
      this.dialogHndler.openDialog(err.message, '', '200ms', '300ms');
      setTimeout(() => this.dialogHndler.closeDialog(), 2000);
      return null;
    }
  }
  async DeleteTeam(params: Params) {
    try {
      const res = await this.TeamRepo.deleteTeam(params);
      this.dialogHndler.openDialog(res.message, '', '200ms', '300ms');
      setTimeout(() => {
        this.dialogHndler.closeDialog();
      }, 1000);
      return res.data;
    } catch (err: any) {
      this.dialogHndler.openDialog(err.message, '', '200ms', '300ms');
      setTimeout(() => this.dialogHndler.closeDialog(), 2000);
      return null;
    }
  }
  async GetTeam(params: Params) {
    try {
      const res = await this.TeamRepo.GetTeam(params);
      this.dialogHndler.openDialog(res.message, '', '200ms', '300ms');
      setTimeout(() => {
        this.dialogHndler.closeDialog();
      }, 1000);
      return res.data;
    } catch (err: any) {
      this.dialogHndler.openDialog(err.message, '', '200ms', '300ms');
      setTimeout(() => this.dialogHndler.closeDialog(), 2000);
      return null;
    }
  }
}
