import { Params } from '@angular/router';

export class TeamEntity implements Params {
  public id?: number;
  public title?: string;
  constructor(data?: { id?: number; title?: string }) {
    this.id = data?.id;
    this.title = data?.title;
  }

  toJson(): any {
    return {
      ...(this.id && { team_id: this.id }),
      ...(this.title && {
        translations: {
          title_en: this.title,
        },
      }),
    };
  }

  static fromMap(data: any): TeamEntity {
    return new TeamEntity({ id: data.id, title: data.title });
  }
}
