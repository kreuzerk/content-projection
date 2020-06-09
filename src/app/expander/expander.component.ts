import {Component, Input} from '@angular/core';

@Component({
  selector: 'expander',
  templateUrl: './expander.component.html',
  styleUrls: ['./expander.component.scss']
})
export class ExpanderComponent {

  @Input() heading: string;
  expanded = false;

  toggleExpand() {
    this.expanded = !this.expanded;
  }
}
