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
	selector: 'app-task6',
	templateUrl: './task6.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	styleUrls: ['./task6.component.css'],
})
export class Task6Component implements OnInit, AfterViewInit {
	public taskData = data['Task6'];
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
