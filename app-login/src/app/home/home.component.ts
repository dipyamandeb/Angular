import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';
// import { UserService } from '../user.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  user$: Observable<User[]>;
    // constructor(private users: UserService) { }

  // ngOnInit() {
  //   this.user$ = this.users.getUsers();
  // }
}
