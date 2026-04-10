import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

import { ApplicationComponent } from './application.component';
import { HomeComponent } from '../home/home.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { SocialComponent } from '../social/social.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { Task1Component } from '../task1/task1.component';
import { Task2Component } from '../task2/task2.component';
import { Task3Component } from '../task3/task3.component';
const routes: Routes = [{ path: '', component: ApplicationComponent }];

@NgModule({
	declarations: [
		ApplicationComponent,
		HomeComponent,
		NavbarComponent,
		Task1Component,
		Task2Component,
		Task3Component,
		SocialComponent,
		FooterComponent,
	],
	imports: [RouterModule.forChild(routes), CommonModule, NgbTooltipModule],
})
export class ApplicationModule {}
