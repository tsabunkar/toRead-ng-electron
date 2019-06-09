import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { FooterComponent } from './footer/footer.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AuthComponent,
    FooterComponent,
    NavbarComponent,
    PagenotfoundComponent,
    SideNavbarComponent,
    HeaderComponent,
  ],
  imports: [CommonModule, SharedModule],
})
export class CoreModule {}
