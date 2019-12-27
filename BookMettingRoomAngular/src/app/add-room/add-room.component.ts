import { Component, OnInit } from '@angular/core';
import { Room } from '../auth/room';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent implements OnInit {

  form: any = {};
  room: Room;
  facilitys: any;
  errorMessage: '';
  facilityid: any;
  facilityname: any;

  constructor(private service: UserService, private router: Router) { }

  submitted = false;

  onSubmit() { this.submitted = true; }

  ngOnInit() {
    let resp = this.service.getFacility();
    resp.subscribe((data) => this.facilitys = data);
  }

  addRoom() {
    console.log(this.room);
    this.room = new Room(
      this.form.id,
      this.form.name,
      this.form.location,
      this.form.facility,
    );

    this.service.addRoom(this.room).subscribe(
      data => {
        console.log(data);
        console.log(this.room);
        this.router.navigate(['admin'])

      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
      }
    )
  }
}
