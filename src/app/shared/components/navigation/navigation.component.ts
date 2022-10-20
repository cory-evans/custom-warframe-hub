import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
})
export class NavigationComponent implements OnInit {
  linkClass =
    'px-4 py-2 block hover:cursor-pointer hover:text-blue-500 transition-colors';

  constructor() {}

  ngOnInit(): void {}
}
