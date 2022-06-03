import {DeviceApiService} from "./device-api.service";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SwitchApiService extends DeviceApiService {

  constructor(http: HttpClient) {
    super(http);
  }
  protected type = 'switch';
}
