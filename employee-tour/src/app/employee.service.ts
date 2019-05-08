import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmployee } from './IEmployee';


@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  private _url = 'http://localhost:8124/user/getAll';

  constructor(private http: HttpClient) { }

  getEmployee(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url);
  };
}
