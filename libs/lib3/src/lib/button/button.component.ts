import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'tailwind-nx-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent {
  @Input() href?: string;
}
