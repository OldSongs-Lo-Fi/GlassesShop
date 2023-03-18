import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Glass} from "../models/Glass";

@Injectable({
  providedIn: 'root'
})
export class GlassService {

  //CRUD operations on glasses list
  private serverUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  public getGlasses(): Observable<Glass[]>{
    return this.http.get<any>(`${this.serverUrl}/glasses`);
  }

  public getGlass(id: number): Observable<Glass>{
    return this.http.get<any>(`${this.serverUrl}/glasses/${id}`);
  }

  public addGlass(glass: Glass): Observable<Glass>{
    return this.http.post<any>(`${this.serverUrl}/glasses/addGlass`, glass);
  }

  public deleteGlass(id: number): void{
    this.http.delete<any>(`${this.serverUrl}/glasses/deleteGlass?id=${id}`);
    return;
  }

  public updateGlass(glass: Glass): Observable<Glass>{
    return this.http.put<any>(`${this.serverUrl}/glasses/updateGlass`, glass);
  }
}
