import { Component, OnInit, ViewChild, ViewChildren, ElementRef, Renderer2, AfterViewInit, HostListener, Directive} from '@angular/core';
import { HttpService } from './http.service';
import {Table} from './table';


@Component({
    selector: 'my-app',
    templateUrl: './html/app.component.html',
    styleUrls: ['./css/app.component.css'],
    providers: [HttpService]
})


export class AppComponent implements OnInit{

  tables: Table[]=[];
  // tables: Table;

  @ViewChild ('main') mainP: ElementRef;
  @ViewChild ('list') list: ElementRef;
  @ViewChild ('quantity') quantity: ElementRef;


  constructor(private httpService: HttpService, private renderer: Renderer2, private elRef: ElementRef){}


  ngOnInit(){

      this.httpService.getData().subscribe(data => this.tables=data);


  }


  onEdit(increased:any){
    if (increased.target.classList.contains("img")){
      let parent = increased.target.parentNode;
      let fon = this.renderer.createElement('div');
      this.mainP.nativeElement.appendChild(fon);
      this.renderer.addClass(fon, 'fon');

      let mainImg = this.renderer.createElement('div');
      this.mainP.nativeElement.appendChild(mainImg);
      this.renderer.addClass(mainImg, 'mainImg');

      let innerAuth = parent.childNodes[0];
      let cloneAuth = innerAuth.cloneNode(true);
      this.renderer.addClass(cloneAuth, 'cloneAuth');
      mainImg.appendChild(cloneAuth);

      let innerCam = parent.childNodes[1];
      let cloneCam = innerCam.cloneNode(true);
      this.renderer.addClass(cloneCam, 'cloneCam');
      mainImg.appendChild(cloneCam);

      let close = this.renderer.createElement('a');
      mainImg.appendChild(close);
      this.renderer.addClass(close, 'close');

      let inner = parent.childNodes[2];
      let clone = inner.cloneNode(true);
      this.renderer.addClass(clone, 'clone');
      mainImg.appendChild(clone);
      let atSrc = clone.getAttribute('src');

      let button = this.renderer.createElement('input');
      this.mainP.nativeElement.appendChild(button);
      this.renderer.addClass(button, 'button');
      button.setAttribute('value', "share");
      button.setAttribute('type', "button");

      mainImg.appendChild(button);

      document.querySelector('.button').addEventListener('click', () => {

        let popupSrc = this.renderer.createElement('input');
        mainImg.appendChild(popupSrc);
        this.renderer.addClass(popupSrc, 'popupSrc');
        popupSrc.setAttribute('value', "http://localhost:8080/" + atSrc);
        let buttonPop = this.renderer.createElement('input');
        mainImg.appendChild(buttonPop);
        this.renderer.addClass(buttonPop, 'buttonPop');
        buttonPop.setAttribute('type', "button");
        buttonPop.setAttribute('value', "copy");

      });

      document.querySelector('.close').addEventListener('click', () => {
          this.renderer.removeChild(this.mainP.nativeElement, fon);
          this.renderer.removeChild(this.mainP.nativeElement, mainImg);

       });

    }

  }



}
