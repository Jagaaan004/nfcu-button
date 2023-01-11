import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-nfcu-button',
  templateUrl: './nfcu-button.component.html',
  styleUrls: ['./nfcu-button.component.scss']
})
export class NfcuButtonComponent {
@Input() color: 'primary' | 'secondary' | 'tertiary' | 'destructive' | undefined;
@Input() size: 'xsmall' | 'small' | 'medium' | 'large' | undefined;


public get cssClasses(): Array<string> {
  return ['button', `${this.color}-button`, 'sizes', `${this.size}-button`];
}

}
