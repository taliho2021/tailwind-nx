import { Component, Inut } from '@angular/core';

@Component({
  selector: 'tailwind-nx-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() href?: string;
}
