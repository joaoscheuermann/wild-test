// MODULES
import { RouterModule, Routes } from "@angular/router";

// COMPONENTS
import { MainComponent } from "./main/main.component";

const appRoutes: Routes = [
    {
        path: '',
        component: MainComponent
    }
];

export const routing = RouterModule.forRoot(appRoutes);
