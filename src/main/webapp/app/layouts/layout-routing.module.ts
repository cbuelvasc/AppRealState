import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutes, navbarRoute } from '../app.route';
import { errorRoute } from './';

const LAYOUT_ROUTES = [
    navbarRoute,
    ...errorRoute
];

@NgModule({
    imports: [
        RouterModule.forRoot(AppRoutes, { useHash: true })
    ],
    exports: [
        RouterModule
    ]
})
export class LayoutRoutingModule {}
