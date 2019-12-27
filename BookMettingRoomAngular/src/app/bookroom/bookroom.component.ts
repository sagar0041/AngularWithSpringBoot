import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { Room } from '../auth/room';
import { TokenStorageService } from '../auth/token-storage.service';

@Component({
  selector: 'app-bookroom',
  templateUrl: './bookroom.component.html',
  styleUrls: ['./bookroom.component.css']
})
export class BookroomComponent implements OnInit {
  id: number
  facilitys: any;
  room: Room;
  message: string;
  email: string;
  confirmRoom: any;

  constructor(private service: UserService, private router: Router, private tokenStorage: TokenStorageService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.room = this.service.getter();
    let resp = this.service.getFacility();
    resp.subscribe((data) => this.facilitys = data);
    this.confirmRoomByDate();
  }

  confirmRoomByDate() {
    let resp = this.service.confirmRoombyDate();
    resp.subscribe((data) => this.confirmRoom = data);

  }

  ConfirmRoom(room) {
    //this.message = `Confirm of ${room.name} Successful`;
    this.service.confirmRoom(this.room).subscribe(
      data => {
        console.log(data);
        console.log(this.room);
        this.router.navigate(['user'])
      },
    )
  }

  CancelRoom() {
    this.router.navigate(['user'])
  }

}
