import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-ticker-percent',
  standalone: true,
  imports: [],
  templateUrl: './ticker-percent.component.html',
  styleUrl: './ticker-percent.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TickerPercentComponent {
  @Input({required: true}) percent: number = 0;
  @Input() range: string = '15m';
}
