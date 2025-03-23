import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iuser } from '../interfaces/iuser.interface';


@Injectable({
  providedIn: 'root'
})

export class SusersService {
  
  //private endPoint: string   = 'https://peticiones.online/users' // URL api
private endPoint: string   =' https://peticiones.online/api/users'

  constructor(private httpClient: HttpClient) {}

  //todos los users
  getUsers(): Observable<{ results: Iuser[] }> {
    return this.httpClient.get<{ results: Iuser[] }>(this.endPoint);
}

   //  usuario por ID
   getUser(_id: string): Observable<Iuser> {
    return this.httpClient.get<Iuser>(`${this.endPoint}/${_id}`);
  }


  //nuevo usuario
  createUser(user: Iuser): Observable<Iuser> {
    return this.httpClient.post<Iuser>(this.endPoint, user);
  }

  //editar usuario
  updateUser(id: string, user: Iuser): Observable<Iuser> {
    return this.httpClient.put<Iuser>(`${this.endPoint}/${id}`, user);
  }

  // eliminar un usuario
  deleteUser(id: string): Observable<any> {
    return this.httpClient.delete(`${this.endPoint}/${id}`);
  }

}
