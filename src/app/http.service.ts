import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Table} from './table';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class HttpService{

    constructor(private http: HttpClient){ }

    getData() : Observable<Table[]> {
        return this.http.get('table.json').pipe(map(data=>{
            let usersList = data["items"];
            return usersList.map(function(user:any) {
                return {auth: user.auth, camera: user.camera, img: user.img};
              });
        }));
      }

      /*getData(){
        const myHeaders = new HttpHeaders({
          'Authorization': 'Bearer ' + "ce09287c97bf310284be3c97619158cfed026004"

        });

        return this.http.post('http://interview.agileengine.com/auth', { headers: myHeaders });
    }*/

}
