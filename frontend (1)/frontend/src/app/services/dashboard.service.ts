import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  url = 'http://127.0.0.1:3001/dashboard/';

  constructor( private http: HttpClient ) { }

  create(dash: any){
    return this.http.post(this.url + 'ajout', dash);
  }

  all(){
    return this.http.get(this.url + 'all');
  }

  getbyid(id: any){
    return this.http.get(this.url + 'getbyid/' + id);
  }

  delete(id: any){
    return this.http.get(this.url + 'supp/' + id);
  }

  update(id: any , dash: any){
    return this.http.put(this.url + 'update/' + id, dash);
  }
}
