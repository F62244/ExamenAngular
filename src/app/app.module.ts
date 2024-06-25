import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MessageDisplayComponent } from './message-display/message-display.component';
import { MessageEditorComponent } from './message-editor/message-editor.component';
import { MessageService } from 'src/assets/message.service';
import { DataTableComponent } from './data-table/data-table.component';
import { DataService } from 'src/assets/data.service';
import { UserDetailComponent } from './user-detail/user-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MessageDisplayComponent,
    MessageEditorComponent,
    DataTableComponent,
    UserDetailComponent,


    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [MessageService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
