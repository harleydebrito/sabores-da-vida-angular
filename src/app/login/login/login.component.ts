import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  validatedEmail: boolean = true;

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) { }

  public ngOnInit(): void {
    //TESTE
    //localStorage.setItem('token', res.token);
    //REMOVER
    if (this.authService.logged()) {
      this.router.navigate(['/home']);
    }
    this.form = this.formBuilder.group({
      user: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(9)]]
    });
  }

  public login(): void {
    let credential: Credential = this.form.value;
  
      this.authService.login(credential).subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
          this.router.navigate(['/home']);
        },
        err => {
          if(err.status === 401){
            this.form.get('user').setErrors({wrong: true});
            this.form.get('password').setErrors({wrong: true});
          }else{
            this.router.navigate(['/error']);
          }
        }
      );
    }

  public valid(field) {
    return this.form.get(field).valid;
  }

  public touched(field) {
    return this.form.get(field).touched;
  }

  public applyError(field) {
    return {
      'is-invalid text-danger': !this.valid(field) && this.touched(field),
    }
  }

  resetForm(){
    this.form.reset();
    this.form.get('user').markAsTouched();
    this.form.get('password').markAsTouched();
  }

}
