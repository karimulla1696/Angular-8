import {
  AfterContentChecked,
  AfterContentInit,
  Component, ContentChild,
  DoCheck, ElementRef,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges, ViewChild,
  ViewEncapsulation
} from '@angular/core';

// @ts-ignore
@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None Native
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, OnDestroy// @ts-ignore
 {
@Input('srvElement') element: {type: string, name: string, content: string};
@Input() name: string;
// @ts-ignore
  @ViewChild('heading') header: ElementRef;
  // @ts-ignore
  @ContentChild('contentParagraph') pargraph: ElementRef;

  constructor() {
    console.log('constructor is called!');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges is called');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit is called!');
    console.log('Text Content: ' +this.header.nativeElement.textContent);
    console.log('Text Content paragraph: ' +this.pargraph.nativeElement.textContent);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck is called!');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit is called!');
    console.log('Text Content: ' +this.header.nativeElement.textContent);
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked is called!');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit is called!');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked is called!');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy is called!')
  }

}
