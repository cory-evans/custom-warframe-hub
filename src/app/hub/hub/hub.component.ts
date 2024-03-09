import { Component, OnDestroy } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { WarframeApiService } from 'src/app/shared/services/warframe-api.service';

@Component({
  selector: 'app-hub',
  templateUrl: './hub.component.html',
})
export class HubComponent implements OnDestroy {
  private _destroyed$ = new Subject<void>();
  worldState$: Observable<WarframeApi.WorldState> = this.warframeApi
    .worldState()
    .pipe(takeUntil(this._destroyed$));

  constructor(private warframeApi: WarframeApiService) {}

  ngOnDestroy(): void {
    this._destroyed$.next();
    this._destroyed$.complete();
  }
}
