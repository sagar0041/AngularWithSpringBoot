import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Room } from '../auth/room';
import { User } from '../auth/user';
import { Mails } from '../auth/mail';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class UserService {
  form: Room;

  private userUrl = 'http://localhost:8080/api/test/user';
  private pmUrl = 'http://localhost:8080/api/test/pm';
  private adminUrl = 'http://localhost:8080/api/test/admin';
  private tlUrl = 'http://localhost:8080/api/test/tl';
  private searchUrl = 'http://localhost:8080/api/admin/getAllUsers';
  private roomurl = 'http://localhost:8080/api/room/add'
  private userurl = 'http://localhost:8080/api/user/add'

  room: Room;
  user: User;

  constructor(private http: HttpClient) { }

  getUserBoard(): Observable<string> {
    return this.http.get(this.userUrl, { responseType: 'text' });
  }

  getPMBoard(): Observable<string> {
    return this.http.get(this.pmUrl, { responseType: 'text' });
  }

  getAdminBoard(): Observable<string> {
    return this.http.get(this.adminUrl, { responseType: 'text' });
  }

  getTLBoard(): Observable<string> {
    return this.http.get(this.tlUrl, { responseType: 'text' });
  }

  public getRoom() {
    return this.http.get("http://localhost:8080/api/room/getAllRoom");
  }
  //to get the room from date
  public getRoombyDate() {
    return this.http.get("http://localhost:8080/api/bookRoomForm/Datetime");
  }
  public getUser() {
    return this.http.get(this.searchUrl);
  }

  public getUserByEmail(email) {
    return this.http.get("http://localhost:8080/api/admin/findUser/" + email);
  }

  public deleteUser(id) {
    return this.http.delete(`http://localhost:8080/api/admin/cancel/${id}`);
  }

  public addRoom(info: Room): Observable<any> {
    return this.http.post<any>(this.roomurl, info);
  }

  public updateRoom(info: Room): Observable<any> {
    return this.http.post<any>(this.roomurl, info);
  }

  public addUser(info: User): Observable<any> {
    return this.http.post<any>(this.userurl, info);
  }

  public updateRole(user) {
    return this.http.post<any>("http://localhost:8080/api/user/role", user, { responseType: 'text' as 'json' });
  }

  public getFacility() {
    return this.http.get("http://localhost:8080/api/faciltiy/getAllFacility");
  }

  public deleteRoom(id) {
    return this.http.delete(`http://localhost:8080/api/room/delete/${id}`);
  }

  ///update to get room
  public getRoomById(id) {
    return this.http.get<Room>(`http://localhost:8080/api/room/${id}`);
  }


  ///update to get room
  public getUserById(id) {
    return this.http.get<User>(`http://localhost:8080/api/user/${id}`);
  }

  public getRoles() {
    return this.http.get("http://localhost:8080/api/roles/getAllRoles");
  }

  public confirmRoom(info: Room): Observable<any> {
    return this.http.post<any>("http://localhost:8080/api/room/bookRoom", info);
  }

  //get Profile
  public getProfile() {
    return this.http.get("http://localhost:8080/api/user/profile");
  }

  setter(room: Room) {
    this.room = room;
  }

  getter() {
    return this.room;
  }

  setter2(user: User) {
    this.user = user;
  }

  getter2() {
    return this.user;
  }


  public confirmRoombyDate() {
    return this.http.get("http://localhost:8080/api/confirmDate");
  }


  //changeemail
  public changemail(email): Observable<any> {
    return this.http.post<any>("http://localhost:8080/api/editMailSave",email);
  }
}
