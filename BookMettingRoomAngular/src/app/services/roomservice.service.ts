import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Room } from '../auth/room';
import { User } from '../auth/user';

@Injectable({
  providedIn: 'root'
})
export class RoomserviceService {

  room: Room;
  user: User;

  constructor(private http: HttpClient) { }

  public getRoom() {
    return this.http.get("http://localhost:8080/api/room/getAllRoom");
  }

  public getAllBookRoom() {
    return this.http.get("http://localhost:8080/api/bookRoom/getAllBookRoom");
  }

  public confirmRoom(booking_id, id) {
    return this.http.get(`http://localhost:8080/api/room/bookRoom/confirmRequest/${booking_id}/${id}`)
  }

  public cancelRoom(booking_id, id) {
    return this.http.get(`http://localhost:8080/api/room/bookRoom/cancelRequest/${booking_id}/${id}`)
  }

  public userRoom() {
    return this.http.get("http://localhost:8080/api/room/bookRoom/user");
  }

  public getPendingStatus(){
    return this.http.get("http://localhost:8080/api/getUserRoom/pendingStatus");
  }

  public getConfirmStatus(){
    return this.http.get("http://localhost:8080/api/getUserRoom/confirmStatus");
  }

  public getCancelStatus(){
    return this.http.get("http://localhost:8080/api/getUserRoom/cancelStatus");
  }
  
  public getAllStatus() {
    return this.http.get("http://localhost:8080/api/getUserRoom/getAllBookRoom")
  }

  setter(room: Room) {
    this.room = room;
  }
  
  getter() {
    return this.room;
  }
  
}
