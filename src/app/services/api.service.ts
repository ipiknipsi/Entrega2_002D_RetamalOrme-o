import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { RespuestaToHeadLines } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getTopHeadLines()
  {
    return this.http.get<RespuestaToHeadLines>('https://www.feriadosapp.com/api/holidays.json')
  }


}

