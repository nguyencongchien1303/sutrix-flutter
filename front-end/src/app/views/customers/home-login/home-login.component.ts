import { User } from '../../../model/user.model';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/api/user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home-login',
  templateUrl: './home-login.component.html',
  styleUrls: ['./home-login.component.scss'],
})
export class HomeLoginComponent implements OnInit {
  dataUser: User[] = [];

  constructor(private userService: UserService) {}
  loginTypeForm = new FormGroup({
    name: new FormControl(),
    password: new FormControl(),
  });

  ngOnInit(): void {
    this.userService.getAll().subscribe((res: any) => {
      this.dataUser = res;
    });
  }
  onSubmit() {
    console.log(this.dataUser);
    console.log(this.loginTypeForm.value.password);
    for (var i = 0; i < this.dataUser.length; i++)
      if (
        this.dataUser[i].name == this.loginTypeForm.value.name &&
        this.dataUser[i].password == this.loginTypeForm.value.password
      ) {
        console.log(true);
      } else {
        console.log(false);
      }
  }
}
