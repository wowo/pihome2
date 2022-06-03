import {ApiResponse} from './api-response';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

export abstract class DeviceApiService {

  protected abstract type: string;

  constructor(protected http: HttpClient) { }

  public fetch() {
    this.http.get<ApiResponse>(`${environment.apiUrl}/${this.type}`, {withCredentials: true}).subscribe((data: ApiResponse) => {
      console.log(data._embedded);
    })
  }
}
