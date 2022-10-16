import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CardDirective } from './directives/card.directive';
import { CountdownTimerComponent } from './components/countdown-timer/countdown-timer.component';
import { ButtonDirective } from './directives/button.directive';

@NgModule({
  declarations: [CardDirective, CountdownTimerComponent, ButtonDirective],
  imports: [CommonModule],
  exports: [
    HttpClientModule,
    CardDirective,
    CountdownTimerComponent,
    ButtonDirective,
  ],
})
export class SharedModule {}
