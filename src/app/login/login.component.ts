import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth/index';

@Component({
    moduleId: module.id,
    selector: 'as-login',
    templateUrl: 'login.html'
})
export class LoginComponent implements OnInit {
    public model: any = {};
    loading = false;
    error = '';

    /**
     * Login component for TaskCat.Enterprise Dashboard
     */
    constructor(
        private router: Router,
        private authService: AuthService) { }

    ngOnInit() {
        this.authService.logout();
    }

    login() {
        this.loading = true;
        this.authService.login(this.model.username, this.model.password)
            .subscribe(result => {
                if (result === true) {
                    this.router.navigate(['/']);
                }
                this.loading = false;
            }, error => {
                console.log(error);
                this.error = error;
                this.loading = false;
            });
    }
}
