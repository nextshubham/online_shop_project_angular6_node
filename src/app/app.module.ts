//Common Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

//Routing Module
import { AppRoutingModule } from './app-routing.module';

//Shared Modules
import { MaterialModule } from './shared/modules/material/material.module';
import { SharedmoduleModule } from './shared/modules/sharedmodule/sharedmodule.module';

//Extra Modules
import { LayoutModule } from '@angular/cdk/layout';

//Service Modules
import { HttpClientModule } from '@angular/common/http';

//Components
import { AppComponent } from './app.component';

//Shared Components
import { ChangePwdComponent } from './shared/component/change-pwd/change-pwd.component';
import { FooterComponent } from './shared/component/footer/footer.component';
import { HeaderComponent } from './shared/component/header/header.component';
import { LoginComponent } from './shared/component/login/login.component';
import { MessageComponent } from './shared/component/message/message.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';

import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule
} from '@angular/material';

//Directives
import { ActivemenuDirective } from './shared/directive/activemenu.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    MessageComponent,
    ActivemenuDirective,
    NavbarComponent,
    ChangePwdComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    SharedmoduleModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
