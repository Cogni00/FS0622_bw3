import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { MatSidenavModule} from '@angular/material/sidenav';
import { PostComponent } from './components/post/post.component';
import { CardComponent } from './components/card/card.component';
import { MatExpansionModule} from '@angular/material/expansion';
import { MatInputModule} from '@angular/material/input';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { MatMenuModule} from '@angular/material/menu';
import { MatListModule} from '@angular/material/list';
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatChipsModule} from '@angular/material/chips';
import { MatChipList } from '@angular/material/chips';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostComponent,
    CardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatExpansionModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
