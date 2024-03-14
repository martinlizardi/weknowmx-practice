import { Component } from '@angular/core';

@Component({
  selector: 'app-black-shape-background',
  standalone: true,
  template: '<div class="shape"></div>',
  styles: [
    `
      .shape {
        background-color: #202022;
        width: 100%;
        height: 24%;
        position: absolute;
        top: 0px;
        border-radius: 100% 0% 100% 0% / 0% 33% 67% 100%;
      }
    `,
  ],
})
export class BlackShapeBackgroundComponent {}
