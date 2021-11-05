import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Data } from '../../interfaces/interfaces';

@Component({
  selector: 'app-api',
  templateUrl: './api.page.html',
  styleUrls: ['./api.page.scss'],
})
export class ApiPage implements OnInit {

  datas: Data[] = []

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getTopHeadLines().subscribe(resp=>{
      console.log('api',resp);

      this.datas.push(...resp.data)
    })

  }

}
