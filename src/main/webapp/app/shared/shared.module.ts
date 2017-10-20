import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DatePipe } from '@angular/common';

import {
    AppRealStateSharedLibsModule,
    AppRealStateSharedCommonModule,
    CSRFService,
    AuthServerProvider,
    AccountService,
    UserService,
    StateStorageService,
    LoginService,
    LoginModalService,
    Principal,
    HasAnyAuthorityDirective,
    JhiLoginModalComponent
} from './';

import { MenuItems } from './menu-items/menu-items';
import { AccordionAnchorDirective, AccordionLinkDirective, AccordionDirective } from './accordion';
import { ToggleFullscreenDirective } from './fullscreen/toggle-fullscreen.directive';

@NgModule({
    imports: [
        AppRealStateSharedLibsModule,
        AppRealStateSharedCommonModule
    ],
    declarations: [
        JhiLoginModalComponent,
        HasAnyAuthorityDirective,
        AccordionAnchorDirective,
        AccordionLinkDirective,
        AccordionDirective,
        ToggleFullscreenDirective
    ],
    providers: [
        LoginService,
        LoginModalService,
        AccountService,
        StateStorageService,
        Principal,
        CSRFService,
        AuthServerProvider,
        UserService,
        DatePipe,
        MenuItems
    ],
    entryComponents: [JhiLoginModalComponent],
    exports: [
        AppRealStateSharedCommonModule,
        JhiLoginModalComponent,
        HasAnyAuthorityDirective,
        DatePipe,
        AccordionAnchorDirective,
        AccordionLinkDirective,
        AccordionDirective,
        ToggleFullscreenDirective
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppRealStateSharedModule {}
