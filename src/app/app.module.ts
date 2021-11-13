import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxChartsModule }from '@swimlane/ngx-charts';


import { MatTabsModule } from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTreeModule} from '@angular/material/tree';
import {MatExpansionModule} from '@angular/material/expansion';


import { TabContainerComponent } from './components/tab/container/tab-container.component';
import { InvestmentCardComponent } from './components/investment-card/investment-card.component';
import { TabPostComponent } from './components/tab/post/tab-post.component';
import { TabPostContentComponent } from './components/tab/post-content/tab-post-content.component';

@NgModule({
  declarations: [
    AppComponent,
    TabContainerComponent,
    InvestmentCardComponent,
    TabPostComponent,
    TabPostContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    MatGridListModule,
    MatTreeModule,
    MatExpansionModule,
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
