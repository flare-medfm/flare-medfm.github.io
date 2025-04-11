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
import { Task4Component } from '../task4/task4.component';
import { Task5Component } from '../task5/task5.component';
import { Task6Component } from '../task6/task6.component';
const routes: Routes = [{ path: '', component: ApplicationComponent }];

@NgModule({
	declarations: [
		ApplicationComponent,
		HomeComponent,
		NavbarComponent,
		Task1Component,
		Task2Component,
		Task3Component,
		Task4Component,
		Task5Component,
		Task6Component,
		SocialComponent,
		FooterComponent,
	],
	imports: [RouterModule.forChild(routes), CommonModule, NgbTooltipModule],
})
export class ApplicationModule {}
