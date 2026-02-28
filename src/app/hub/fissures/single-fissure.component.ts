import {
  Component,
  computed,
  DestroyRef,
  inject,
  input,
  OnInit,
  signal,
} from '@angular/core';
import { SettingsService } from 'src/app/shared/services/settings.service';

const FISSURE_TIERS = ['lith', 'meso', 'neo', 'axi'];
const CYCLE_INTERVAL_MS = 3000;

@Component({
  selector: 'fissure-card',
  standalone: false,
  templateUrl: './single-fissure.component.html',
  styleUrls: ['./single-fissure.component.css'],
})
export class SingleFissureComponent implements OnInit {
  fissure = input.required<WarframeApi.Fissure>();

  private destroyRef = inject(DestroyRef);
  private omniaIndex = signal(0);
  glitching = signal(false);

  constructor(private settingsService: SettingsService) {}

  ngOnInit(): void {
    if (this.fissure().tier.toLowerCase() === 'omnia') {
      const intervalId = setInterval(() => {
        this.glitching.set(true);
        setTimeout(() => this.glitching.set(false), 500);
        this.omniaIndex.update((i) => (i + 1) % FISSURE_TIERS.length);
      }, CYCLE_INTERVAL_MS);

      this.destroyRef.onDestroy(() => clearInterval(intervalId));
    }
  }

  tier = computed(() => this.fissure().tier.toLowerCase());
  isOmnia = computed(() => this.tier() === 'omnia');

  url = computed(() => {
    let tier = this.tier();

    // omnia fissures cycle through all tiers: lith, meso, neo, axi.
    if (this.isOmnia()) {
      tier = FISSURE_TIERS[this.omniaIndex()];
    }

    return (
      'https://raw.githubusercontent.com/WFCD/genesis-assets/master/svg/fissures/' +
      tier +
      '.svg'
    );
  });

  highlighted = computed(() => {
    return (
      this.settingsService.settings.highlightedFissures.indexOf(
        this.fissure().missionType,
      ) >= 0
    );
  });
}
