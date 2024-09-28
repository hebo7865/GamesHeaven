import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  private readonly _FormBuilder = inject(FormBuilder)
  private readonly _Router = inject(Router)

  registerFrom:FormGroup = this._FormBuilder.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required, Validators.pattern(/^\w{6,20}$/)]],
    confirmPassword: [null, [Validators.required]]
  })

  submitRegister():void{
    if(this.registerFrom.valid){
      localStorage.setItem('userData', JSON.stringify(this.registerFrom.value))
      localStorage.setItem('sessionData', JSON.stringify(this.registerFrom.value))
      console.log(this.registerFrom.value);
      console.log(this.registerFrom);
      this._Router.navigate(['/home'])
    }else {
      this.registerFrom.markAllAsTouched()
    }
  }

}
