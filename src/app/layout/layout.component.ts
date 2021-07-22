import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from "@angular/animations";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: [
    trigger('NavGroupItemToggle', [
      state('collapsed', style({ height: '0px' })),
      state('expanded', style({ height: '{{ clientHeight }}px' }), { params: { clientHeight: 0 } }),
      transition('collapsed <=> expanded', [
        animate('.1s')
      ])
    ])
  ]
})
export class LayoutComponent implements OnInit {

  expandedMenuName: string = "";
  clientHeight: number = 500;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(event: Event) {
    const element = event.target as HTMLAnchorElement;
    const menuName = (element.textContent ?? '').trim();
    this.expandedMenuName = menuName === this.expandedMenuName ? '' : menuName;
    if (element.nextElementSibling) {
      // element.nextElementSibling.
      // this.clientHeight = element.nextElementSibling.clientHeight;
      console.log(this.clientHeight);
    }
  }
}
