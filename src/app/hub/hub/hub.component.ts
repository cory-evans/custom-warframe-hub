import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WarframeApiService } from 'src/app/shared/services/warframe-api.service';

@Component({
  selector: 'app-hub',
  templateUrl: './hub.component.html',
})
export class HubComponent implements OnInit, OnDestroy {
  worldState?: WarframeApi.WorldState;
  worldStateSubscription?: Subscription;

  constructor(private warframeApi: WarframeApiService) {}

  ngOnInit(): void {
    this.worldStateSubscription = this.warframeApi
      .worldState()
      .subscribe((state) => {
        this.worldState = state;
      });
  }

  ngOnDestroy(): void {
    this.worldStateSubscription?.unsubscribe();
  }
}
