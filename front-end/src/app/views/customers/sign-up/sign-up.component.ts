import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  dataUser;
  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private toastr: ToastrService
  ) {}
  signUpTypeForm = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    phoneNumber: new FormControl(),
    password: new FormControl(),
    passwordConfirm: new FormControl(),
  });
  ngOnInit(): void {
    // this.toastr.success('Tạo mới thành công', '');
  }
  submit() {
    this.dataUser = this.signUpTypeForm.value;
    if (!this.signUpTypeForm.invalid) {
      if (this.dataUser.password == this.dataUser.passwordConfirm) {
        this.httpClient
          .post<any>('https://ec18b101.azurewebsites.net/api/User', {
            name: this.dataUser.name,
            username: this.dataUser.email,
            phone: this.dataUser.phoneNumber,
            password: this.dataUser.password,
          })
          .subscribe((res) => {
            this.toastr.success('Tạo mới thành công', '');
            if (res.id != null || res.id != undefined) {
              this.router.navigate(['/customer']);
            }
          });
      }
    } else {
      console.log(false);
    }
  }
}
