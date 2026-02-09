import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "listing",
        loadComponent: () => import("./components/pages/listing-page/listing-page.component").then(m => m.ListingPageComponent)
    },
    {
        path: "adding",
        loadComponent: () => import("./components/pages/adding-page/adding-page.component").then(m => m.AddingPageComponent)
    },
    {
        path: "editing/:id",
        loadComponent: () => import("./components/pages/updating-page/updating-page.component").then(m => m.UpdatingPageComponent)
    },
    {
        path: "**",
        redirectTo: "listing"
    }
];
