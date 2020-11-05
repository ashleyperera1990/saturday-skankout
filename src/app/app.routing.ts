import {NgModule} from '@angular/core';
import {CommonModule,} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';

import {HomePageComponent} from './pages/home-page/home-page.component';
import {ResidentDjsComponent} from './pages/resident-djs/resident-djs.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'index',
        pathMatch: 'full'
    },
    {
        path: 'index',
        component: HomePageComponent
    },
    {
        path: 'resident-djs',
        component: ResidentDjsComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes, {useHash: true})
    ],
    exports: [],
})
export class AppRoutingModule {
}
