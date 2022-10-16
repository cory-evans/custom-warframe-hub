import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HubComponent } from './hub/hub.component';
import { HubRoutingModule } from './hub-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FissuresComponent } from './fissures/fissures.component';

@NgModule({
  declarations: [HubComponent, FissuresComponent],
  imports: [CommonModule, HubRoutingModule, SharedModule],
})
export class HubModule {}
