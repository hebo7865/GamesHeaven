import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {

  constructor() { }
  darkModeSignal:WritableSignal<string> = signal<string>('null')

  updateDarkMode():void{
    this.darkModeSignal.update((value)=>(value === 'dark' ? 'null' : 'dark'));
  }
}
