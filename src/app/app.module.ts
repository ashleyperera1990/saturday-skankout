import {DEFAULT_CURRENCY_CODE, NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from './modules/shared/shared.module';
import { ResidentDjsComponent } from './pages/resident-djs/resident-djs.component';

@NgModule({
    declarations: [
        AppComponent,
        HomePageComponent,
        ResidentDjsComponent,
    ],
    imports: [
        BrowserModule,
        NgbModule,
        FormsModule,
        RouterModule,
        HttpClientModule,
        AppRoutingModule,
        SharedModule
    ],
    providers: [
        {provide: DEFAULT_CURRENCY_CODE, useValue: 'GBP'}

    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
