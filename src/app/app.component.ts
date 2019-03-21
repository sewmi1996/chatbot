import { Component } from '@angular/core';
import { Router } from "@angular/router";
import 'hammerjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Digital Orchestrator';


  constructor(private route:Router){
  }
}

