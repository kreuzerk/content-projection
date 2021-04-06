import {Component, ContentChild, Input, TemplateRef} from '@angular/core';

@Component({
  selector: 'expander',
  templateUrl: './expander.component.html',
  styleUrls: ['./expander.component.scss']
})
export class ExpanderComponent {

  @Input() heading: string;
  @ContentChild(TemplateRef) content: TemplateRef<any>;
  expanded = false;

  toggleExpand() {
    this.expanded = !this.expanded;
  }
}
