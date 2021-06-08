import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FooBarQuixService } from '../foo-bar-quix.service';
import { Result } from '../model/result';

@Component({
  selector: 'app-foo-bar-quix',
  templateUrl: './foo-bar-quix.component.html'
})
export class FooBarQuixComponent implements OnInit, OnDestroy {

  values: NumberConverted[] = [];

  constructor(private fooBarQuixService: FooBarQuixService) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  convertNumber(inputNumber: number): void {
    this.fooBarQuixService.getFooBarQuix(inputNumber)
      .subscribe((response:Result) => this.values.push(new NumberConverted(inputNumber, response.result)));
  }

}

export class NumberConverted {
  constructor(
    public numberToConvert: number,
    public result: string) { }
}
