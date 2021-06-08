import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderRoutes } from 'src/app/shared/constants/routes.contants';
import { HeaderRoute } from 'src/app/shared/models/routes.interface';
import { AuthApiService } from 'src/app/web-api/services/auth-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  routes: HeaderRoute[] = HeaderRoutes;
  isLoggedIn: boolean = false;

  constructor(
    private authApiService: AuthApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.isLoggedIn = this.authApiService.isLoggedIn();
  }

  ngDoCheck() {
    if (this.authApiService.isLoggedIn()) {
      this.isLoggedIn = true;
    }
  }

  logout() {
    this.isLoggedIn = false;
    this.authApiService.logout();
    this.router.navigateByUrl('/auth/login');
  }

}
