import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component(
  {
  selector: 'app-color-button',
  templateUrl: './color-button.component.html',
  styleUrls: ['./color-button.component.css']
})
export class ColorButtonComponent 
{
  @Input() bgColor!: string;
  @Input() txtColor!: string;
  @Output() colorChange = new EventEmitter<{ bgColor: string, txtColor: string }>();
  handleClick() 
  {
    this.colorChange.emit({ bgColor: this.bgColor, txtColor: this.txtColor });
  }
}