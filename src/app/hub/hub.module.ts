import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HubComponent } from './hub/hub.component';
import { HubRoutingModule } from './hub-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FissuresComponent } from './fissures/fissures.component';
import { SingleFissureComponent } from './fissures/single-fissure.component';
import { VoidTraderComponent } from './void-trader/void-trader.component';

@NgModule({
  declarations: [HubComponent, FissuresComponent, SingleFissureComponent, VoidTraderComponent],
  imports: [CommonModule, HubRoutingModule, SharedModule],
})
export class HubModule {}
