import { Component } from '@angular/core';
@Component(
{
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  backgroundColor = 'white';
  textColor = 'black';
  changeColor(bgColor: string, txtColor: string) 
  {
    this.backgroundColor = bgColor;
    this.textColor = txtColor;
  }
}