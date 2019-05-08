import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

import { User } from "../user";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private Auth: AuthService, private router: Router) {}

  ngOnInit() {}
  loginUser(event) {
    event.preventDefault();
    const target = event.target;

    const username = target.querySelector("#username").value;
    const password = target.querySelector("#password").value;

    let user = new User();
    user.username = username;
    user.password = password;
    let msg = this.Auth.getUserDetails(user).subscribe(data => {
      console.log(data);
      this.router.navigateByUrl("/home");
      });

  }
}
