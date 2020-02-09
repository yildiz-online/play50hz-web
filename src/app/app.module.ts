/*
 * MIT License
 *
 * Copyright (c) 2019 Grégory Van den Borre
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localeFrExtra from '@angular/common/locales/extra/fr';


import {AppComponent} from './app.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {HomeComponent} from "./home/home.component";
import {DownloadComponent} from "./download/download.component";
import {NavigationComponent} from "./navigation/navigation.component";
import {RoadmapComponent} from "./roadmap/roadmap.component";

registerLocaleData(localeFr, 'fr', localeFrExtra);

const appRoutes: Routes = [
  { path: '',             redirectTo: 'home', pathMatch : 'full' },
  { path: 'home',         component: HomeComponent },
  { path: 'download',     component: DownloadComponent },
  { path: 'roadmap',      component: RoadmapComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DownloadComponent,
    RoadmapComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  providers: [
    HttpClient,
    { provide: LOCALE_ID, useValue: 'fr' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
