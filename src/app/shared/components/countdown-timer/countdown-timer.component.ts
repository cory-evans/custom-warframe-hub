import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  HostBinding,
} from '@angular/core';
import { Subscription, timer } from 'rxjs';

const VARIANTS = {
  expired: 'bg-blue-600',
  short: 'bg-red-600',
  medium: 'bg-yellow-600',
  long: 'bg-green-700',
};

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
})
export class CountdownTimerComponent implements OnInit, OnDestroy {
  @Input() expires?: string | Date;
  private expiresAsDate?: Date;

  private subscription?: Subscription;

  text = '';
  class = '';

  secondsRemaining = 0;
  calcSecondsRemaining() {
    if (this.expires && !this.expiresAsDate)
      this.expiresAsDate = new Date(this.expires);

    if (!this.expiresAsDate) return 0;

    const now = new Date();
    this.secondsRemaining =
      Math.floor(this.expiresAsDate.getTime() / 1000) -
      Math.floor(now.getTime() / 1000);

    return this.secondsRemaining;
  }

  constructor() {}

  ngOnInit(): void {
    this.subscription = timer(0, 1000).subscribe(() => {
      const s = this.calcSecondsRemaining();

      if (s < 0) {
        this.text = 'expired';
        this.class = VARIANTS.expired;
        return;
      }

      this.calcText();

      if (s < 5 * 60) {
        this.class = VARIANTS.short;
        return;
      }

      if (s < 25 * 60) {
        this.class = VARIANTS.medium;
        return;
      }

      this.class = VARIANTS.long;
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  calcText() {
    const seconds = Math.floor(this.secondsRemaining % 60);
    const minutes = Math.floor((this.secondsRemaining / 60) % 60);
    const hours = Math.floor((this.secondsRemaining / (60 * 60)) % 24);

    var t = `${this.padNumber(seconds)}s`;
    if (minutes || hours) t = `${this.padNumber(minutes)}m ${t}`;

    if (hours) t = `${hours}h ${t}`;

    this.text = t;
  }

  padNumber(x: number) {
    return String(x).padStart(2, '0');
  }
}
