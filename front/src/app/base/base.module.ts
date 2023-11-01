import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { RouterModule } from '@angular/router';
import { ThemeToggleButtonComponent } from './theme-toggle-button/theme-toggle-button.component';
import { SharedModule } from 'app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BreadcrumbComponent,
    FooterComponent,
    NavbarComponent,
    SidenavComponent,
    ThemeToggleButtonComponent,
  ],
  imports: [CommonModule, RouterModule, SharedModule, ReactiveFormsModule],
  exports: [
    NavbarComponent,
    FooterComponent,
    SidenavComponent,
    BreadcrumbComponent,
  ],
})
export class BaseModule {}
