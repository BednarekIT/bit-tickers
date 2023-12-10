import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {TickersFooterComponent, TickersHeaderComponent} from "./components";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, TickersHeaderComponent, TickersFooterComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    constructor() {
        if (!localStorage.getItem('favTickers')) {
            localStorage.setItem('favTickers', JSON.stringify([]));
        }
    }
}
