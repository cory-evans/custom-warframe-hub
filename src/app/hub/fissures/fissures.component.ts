import { Component, Signal, computed, input, signal } from '@angular/core';

type FissureTab = 'normal' | 'steelpath' | 'voidstorm' | 'all';

@Component({
  selector: 'hub-fissures',
  templateUrl: './fissures.component.html',
})
export class FissuresComponent {
  fissures = input.required<WarframeApi.Fissure[]>();

  tab = signal<FissureTab>('all');

  fissuresFiltered = computed(() => {
    const fissures = this.fissures();

    fissures.sort((a, b) => {
      return a.tierNum - b.tierNum;
    });

    switch (this.tab()) {
      case 'normal':
        return fissures.filter((x) => x.isHard == false && x.isStorm == false);
      case 'steelpath':
        return fissures.filter((x) => x.isHard == true);
      case 'voidstorm':
        return fissures.filter((x) => x.isStorm == true);
      default:
        return fissures;
    }
  });
  constructor() {
    const t = localStorage.getItem('fissureView');
    if (t) {
      this.tab.set(t as FissureTab);
    } else {
      this.tab.set('all');
    }
  }

  selectTab(t: FissureTab) {
    localStorage.setItem('fissureView', t);
    this.tab.set(t);
  }
}
