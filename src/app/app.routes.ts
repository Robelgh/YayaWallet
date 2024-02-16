import { Routes } from '@angular/router';

import { LoginComponent } from "./user/components/login/login.component";
import { authGuardGuard } from "./user/middleware/auth/auth-guard.guard";

export const routes: Routes = [

    {
		path: "login",
		component: LoginComponent,
	},
  
    {
		path: "dashboard",
		loadChildren: () =>
			import("./user/user.module").then((m) => m.UserModule),
            canMatch: [authGuardGuard],
	},
 
];
