import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import * as fabric from 'fabric';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  async ngAfterViewInit() {
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
    const canvas = new fabric.Canvas(this.canvasRef.nativeElement,  { width: vw, height: vh });
    const text = new fabric.Textbox('Double-tap to edit', { left: 10, top: 10, width: 300, backgroundColor: 'lightgray' });
    canvas.add(text);
  }
}
