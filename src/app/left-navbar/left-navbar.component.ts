import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-left-navbar',
	templateUrl: './left-navbar.component.html',
	styleUrls: ['./left-navbar.component.scss']
})
export class LeftNavbarComponent implements OnInit {

	firstLevelPage: String = "";
	isHome: boolean = true;
	secondLevelPage: string = ""

	constructor() { }

	ngOnInit() {

		this.firstLevelPage = "";
		this.isHome = true;
	}

	firstLevelClick = (firstLevelPage: string) => {
		this.isHome = false;
		this.firstLevelPage = firstLevelPage;
	}

	secondLevelClick = (secondLevelPage: string) => {
		this.isHome = false;
		this.secondLevelPage = secondLevelPage;
	}
}
