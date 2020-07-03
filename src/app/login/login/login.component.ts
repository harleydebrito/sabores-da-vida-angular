import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) { }

  public ngOnInit(): void {
    this.form = this.formBuilder.group({
      user: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(9)]]
    });
  }

  public login(): void{
    let credential: Credential = this.form.value;
    this.authService.login(credential).subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this.router.navigate(['/home']);
      },
      err => console.log(err)
    );
  }

}
