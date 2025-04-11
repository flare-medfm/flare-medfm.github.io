import { AfterViewInit, Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

declare var identity: any;
declare var data: any;
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit, OnInit {
	public identityData = identity;
	public linkData = data['Links'];

	constructor(private swUpdate: SwUpdate) {}
	ngOnInit() {
		if (this.swUpdate.isEnabled) {
			this.swUpdate.versionUpdates.subscribe((event) => {
				if (event.type === 'VERSION_READY') {
					if (confirm('New update available. Load New Version?')) {
						this.swUpdate.activateUpdate().then(() => {
							window.location.reload();
						});
					}
				}
			});
		}
		let link: HTMLLinkElement = document.createElement('link');
		link.setAttribute('rel', 'canonical');
		link.setAttribute('href', document.URL);
		document.head.appendChild(link);

		console.log(
			`%c${this.identityData['name']}`,
			'color:#F56540; font-size:27px'
		);
		console.log(`%c${this.linkData.GitHub.link}`, 'font-size:17px');
	}

	ngAfterViewInit(): void {
		let loader = document.getElementById('loader')!!;
		let splash = document.getElementById('splash')!!;
		let rightSection = document.getElementById('section-right')!!;
		let leftSection = document.getElementById('section-left')!!;
		setTimeout(() => {
			splash.remove();
			rightSection.style.transform = 'translateX(100%)';
			leftSection.style.transform = 'translateX(-100%)';
			setTimeout(() => {
				loader.remove();
			}, 800);
		}, 1000);
	}
}
