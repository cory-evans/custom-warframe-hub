import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'hub-void-trader',
  templateUrl: './void-trader.component.html',
})
export class VoidTraderComponent {
  voidTrader = input.required<WarframeApi.VoidTrader>();

  inventory = computed(() => {
    const vt = this.voidTrader();

    return vt.inventory.sort((a, b) => a.item.localeCompare(b.item));
  });
}
