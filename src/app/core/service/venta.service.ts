import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  constructor(
    private http: HttpClient,
  ) { }

    //CON ENVIRONMENTS
  // public get(url: string) {
  //   return this.http.get(`${environment.apiUrl}/${this.module}`+url);
  // }

  public get(url: string) {
    return this.http.get(url);
  }

  public sale(url: any, id: number, data: any) {
    return this.http.post<any>(url + `/${id}`, data)
  }

  public filterFecha(url: string, fecha: string) {
    return this.http.get(url + `/${fecha}`)
  }
}
