import { Component } from "@angular/core";
import { AuthService } from "../../middleware/auth/auth.service";
import { CommonModule } from "@angular/common";
import { NavigationExtras, Router } from "@angular/router";
import { FormsModule } from "@angular/forms";

@Component({
	selector: "user-payment-login",
	standalone: true,
	imports: [CommonModule, FormsModule],
	templateUrl: "./login.component.html",
	styleUrl: "./login.component.scss",
})
export class LoginComponent {
	loginFormModel: any = {
		username: "",
		password: "",
	};

	constructor(public authService: AuthService, public router: Router) {}

	login(form: any) {
		console.log(form);

		this.authService.login().subscribe(() => {
			if (this.authService.isLoggedIn) {
				const redirectUrl = "/dashboard";
				const navigationExtras: NavigationExtras = {
					queryParamsHandling: "preserve",
					preserveFragment: true,
				};

				// Redirect the user
				this.router.navigate([redirectUrl], navigationExtras);
			}
		});
	}

	logout() {
		this.authService.logOut();
	}
}
