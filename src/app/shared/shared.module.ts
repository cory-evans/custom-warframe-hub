import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardDirective } from './directives/card.directive';
import { CountdownTimerComponent } from './components/countdown-timer/countdown-timer.component';
import { ButtonDirective } from './directives/button.directive';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    CardDirective,
    CountdownTimerComponent,
    ButtonDirective,
    NavigationComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    RouterModule,
    FormsModule,
    NgSelectModule,
    NavigationComponent,
    CardDirective,
    CountdownTimerComponent,
    ButtonDirective,
  ],
})
export class SharedModule {}
