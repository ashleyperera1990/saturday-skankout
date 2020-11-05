import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component';
import {PlayerBarComponent} from './player-bar/player-bar.component';
import {RouterModule} from '@angular/router';
import {PageHeaderComponent} from './page-header/page-header.component';


@NgModule({
    declarations: [
        NavbarComponent,
        PlayerBarComponent,
        PageHeaderComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        NavbarComponent,
        PlayerBarComponent,
        PageHeaderComponent
    ]
})
export class SharedModule {
}
