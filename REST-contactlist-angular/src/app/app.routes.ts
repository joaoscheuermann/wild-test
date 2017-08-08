// MODULES
import { RouterModule, Routes } from "@angular/router";

// COMPONENTS
import { MainComponent } from "./main/main.component";
import { InfosComponent } from "./infos/infos.component";

const appRoutes: Routes = [
    {
        path: '',
        component: MainComponent
    },
    {
        path: 'infos/:id',
        component: InfosComponent
    }
];

export const routing = RouterModule.forRoot(appRoutes);
