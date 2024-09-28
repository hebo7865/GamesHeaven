import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { DarkModeService } from '../../core/services/dark-mode.service';

interface IData{
  email:string | null,
  password:string | null,
  confirmPassword:string | null,
}



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private readonly _FormBuilder = inject(FormBuilder);
  private readonly _Router = inject(Router);

  _darkModeService = inject(DarkModeService);
  msgError:string = '';
  userData:IData = {} as IData
  loginData:object =  {};

  loginSubmit: FormGroup = this._FormBuilder.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required, Validators.pattern(/^\w(6,20)$/)]]
  })

  submitLogin():void{
    console.log(this.loginSubmit.value);
    this.loginSubmit.value;
    this.userData = JSON.parse(localStorage.getItem('userData')!)
    if (this.userData.email === this.loginSubmit.get('email')?.value &&
      this.userData.password === this.loginSubmit.get('password')?.value)
    {
      localStorage.setItem('sessionData', JSON.stringify(this.loginSubmit.value))
      this._Router.navigate(['/home'])
    }
    else{
      this.msgError = 'Email or Password is incorrect'
    }
  }

}
