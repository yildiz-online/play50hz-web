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
import { RouterModule, Routes } from '@angular/router';
import {NgModule} from "@angular/core";

import {AppComponent} from './app.component';
import {HomeComponent} from "./home/home.component";
import {DownloadComponent} from "./download/download.component";
import {NavigationComponent} from "./navigation/navigation.component";
import {RoadmapComponent} from "./roadmap/roadmap.component";
import {CopyrightComponent} from "./footer/copyright.component";

import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';

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
    NavigationComponent,
    CopyrightComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
