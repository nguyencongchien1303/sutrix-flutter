import { User } from './../../model/user.model';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/api/user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home-login',
  templateUrl: './home-login.component.html',
  styleUrls: ['./home-login.component.scss'],
})
export class HomeLoginComponent implements OnInit {
  datas: User[] = [];

  constructor(private userService: UserService) {}
  loginTypeForm = new FormGroup({
    name: new FormControl(),
    password: new FormControl(),
  });

  ngOnInit(): void {
    this.userService.getAll().subscribe((res: any) => {
      this.datas = res;
      console.log(res);
    });
  }
}
