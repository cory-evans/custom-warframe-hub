import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hub-void-trader',
  templateUrl: './void-trader.component.html',
})
export class VoidTraderComponent implements OnInit {
  @Input() voidTrader?: WarframeApi.VoidTrader;
  constructor() {}

  ngOnInit(): void {}
}
