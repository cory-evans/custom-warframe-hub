import { Directive, HostBinding, Input } from '@angular/core';

const common = 'border rounded transition-colors';
const VARIANTS_INACTIVE: { [key: string]: string } = {
  primary: 'bg-blue-600 hover:bg-blue-800 text-white',
  'primary-outline':
    'bg-white text-blue-600 border-blue-600 hover:bg-blue-600/80 hover:text-white',
};

const VARIANTS_ACTIVE: { [key: string]: string } = {
  primary: '',
  'primary-outline':
    'bg-blue-600 text-white border-blue-600 hover:bg-blue-600/80',
};

const VARIANTS_SIZING: { [key: string]: string } = {
  sm: 'px-2 py-1',
  md: 'px-4 py-2',
  lg: 'px-6 py-4 text-lg',
};

@Directive({
  selector: '[appButton]',
})
export class ButtonDirective {
  @Input() appButton: keyof typeof VARIANTS_INACTIVE = 'primary';
  @Input() size: keyof typeof VARIANTS_SIZING = 'md';
  @Input() active = false;

  @HostBinding('class')
  get btnClass() {
    return (
      common +
      ' ' +
      VARIANTS_SIZING[this.size] +
      ' ' +
      (this.active
        ? VARIANTS_ACTIVE[this.appButton]
        : VARIANTS_INACTIVE[this.appButton])
    );
  }

  constructor() {}
}
