import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestTpeEnum } from '../../ServicesHandler/RequestTpeEnum';
import { IBody } from '../../ServicesHandler/bodyInterface';

@Injectable({
  providedIn: 'root',
})
export class ApiHandleService {
  constructor(private httpClient: HttpClient) {}

  sendHttpRequest<T>(url: string, type: RequestTpeEnum, body?: IBody) {
    switch (type) {
      case RequestTpeEnum.Get:
        return this.httpClient.get<T>(url);
      case RequestTpeEnum.Post:
        return this.httpClient.post<T>(url, body);
      case RequestTpeEnum.Put:
        return this.httpClient.put<T>(url, body);
      case RequestTpeEnum.Delete:
        return this.httpClient.delete<T>(url);
    }
  }
}
