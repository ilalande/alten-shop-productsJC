import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ThemeToggleButtonComponent } from './theme-toggle-button/theme-toggle-button.component';

@NgModule({
  declarations: [
    BreadcrumbComponent,
    FooterComponent,
    NavbarComponent,
    SidenavComponent,
    ThemeToggleButtonComponent,
  ],
  imports: [CommonModule],
  exports: [
    NavbarComponent,
    FooterComponent,
    SidenavComponent,
    BreadcrumbComponent,
  ],
})
export class BaseModule {}
