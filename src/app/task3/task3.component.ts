import {
	AfterViewInit,
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	HostListener,
	OnInit,
} from '@angular/core';

declare var data: any;

@Component({
	selector: 'app-task3',
	templateUrl: './task3.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	styleUrls: ['./task3.component.css'],
})
export class Task3Component implements OnInit, AfterViewInit {
	public taskData = data['Task3'];
	public selector: any;

	public activeElements: any = {};

	constructor(public changeDetectorRef: ChangeDetectorRef) {
		changeDetectorRef.detach();
	}

	ngOnInit(): void {
		this.changeDetectorRef.detectChanges();
	}
	ngAfterViewInit() {
		const element = document.querySelector('.txt-bg-task');
		if (element) {
			(element as HTMLElement).style.setProperty(
				'--task-number',
				`"${this.taskData.name}"`
			);
		}
	}

	@HostListener('window:resize', ['$event'])
	onWindowResize() {
		this.updateSelector('story');
	}

	public updateSelector(tab: string) {
		if (!this.selector) {
			this.selector = document.getElementById('selector');
		}
		this.selector.style.width = `${this.activeElements[tab].offsetWidth}px`;
		this.selector.style.left = `${this.activeElements[tab].offsetLeft}px`;
	}
}
