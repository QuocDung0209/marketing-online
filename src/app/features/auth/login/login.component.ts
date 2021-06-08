import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { DefaultConstants } from 'src/app/shared/constants/default.constant';
import { PlaceholderConstants } from 'src/app/shared/constants/placeholders.constant';
import { Utils } from 'src/app/shared/helpers/utils.helpers';
import { AuthApiService } from 'src/app/web-api/services/auth-api.service';
import { UserApiService } from 'src/app/web-api/services/user-api.service';
import { Router } from '@angular/router';
import { CustomValidators } from 'src/app/shared/helpers/validators.helpers';
import { MessageContants } from 'src/app/shared/constants/messages.contant';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public placeholder = PlaceholderConstants;
  errorMessage: string = DefaultConstants.emptyString;
  validationError = MessageContants;

  container: any;

  public loginForm!: FormGroup;
  isSubmitted = false;

  constructor(
    private fb: FormBuilder,
    private authApiService: AuthApiService,
    private userApiService: UserApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      user: ['', [CustomValidators.required]],
      password: ['', CustomValidators.required],
      rememberMe: false
    });
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    this.container = document.getElementById('container');

    signUpButton && signUpButton.addEventListener('click', () => {
      this.container && this.container.classList.add("right-panel-active");
    });

    signInButton && signInButton.addEventListener('click', () => {
      this.container && this.container.classList.remove("right-panel-active");
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  signUp(event: any) {
    this.container && this.container.classList.remove("right-panel-active");
  }

  onSubmit(): void {
    this.isSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    const password = Utils.hashPassword(this.f.password.value);
    console.log(password);

    this.authApiService.login(this.f.user.value, this.f.password.value).subscribe(res => {
      this.errorMessage = "Login is successful!";
      this.userApiService.getAllUsers().subscribe(users => {
        this.router.navigateByUrl('/technologies');
      })

    },
      error => {
        console.log(error);
        this.authApiService.logout();
        this.errorMessage = Utils.get(error, 'error.errors[0]');
      })
  }

}
