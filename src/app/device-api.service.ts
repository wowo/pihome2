import {ApiResponse, Switch} from './api-response';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {Observable, pluck} from 'rxjs';
import {map} from 'rxjs/operators';

export abstract class DeviceApiService {

  protected abstract type: string;

  protected constructor(protected http: HttpClient) { }

  public fetch(): Observable<any> {
    return this.http
      .get<ApiResponse>(`${environment.apiUrl}/${this.type}`, {withCredentials: true})
      .pipe(
        pluck('_embedded'),
        map(x => {
          let switches: Array<Switch> = [];
          Object.values(x).forEach(y => switches.push(new Switch(y.name, y.group, y.key, y.state, y.when, y.scheduled, y.durations, y. icon, y.type)));
          return switches;
        }),
  );
  }
}
