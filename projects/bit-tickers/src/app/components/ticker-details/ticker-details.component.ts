import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {TickerDTO} from "../../data/data";
import {DatePipe} from "@angular/common";
import {NumberFormatPipe} from "../../pipes/number-format.pipe";
import {SvgIconComponent} from "../svg-icon/svg-icon.component";
import {TickerPercentComponent} from "../ticker-percent/ticker-percent.component";

@Component({
  selector: 'app-ticker-details',
  standalone: true,
  imports: [
    DatePipe,
    NumberFormatPipe,
    SvgIconComponent,
    TickerPercentComponent
  ],
  templateUrl: './ticker-details.component.html',
  styleUrl: './ticker-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TickerDetailsComponent {
  @Input({required: true}) details: TickerDTO | any;
}
