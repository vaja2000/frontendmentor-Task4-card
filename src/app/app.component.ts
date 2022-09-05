import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Task4';
  cardHolderNameFormControl:any
  cardData:FormGroup = new FormGroup({})
  date:any = new Date().getFullYear()

  ngOnInit(): void {
    this.cardData = new FormGroup({
      'CardHolderName' : new FormControl( null, [
        Validators.required,
        Validators.maxLength(25),
        Validators.pattern("[a-zA-Z]{1,9}")
      ] ),
      'CardNumber' : new FormControl( null, [
        Validators.required,
        Validators.pattern("[0-9]{16}")
      ] ),
      'Month' : new FormControl( null, [
        Validators.required,
        Validators.pattern("[1-9]{1,2}"),
        Validators.max(12)
      ] ),
      'Year' : new FormControl( null, [
        Validators.required,
        Validators.pattern("[0-9]{4}"),
        Validators.min(this.date - 4),
        Validators.max(this.date + 4)
      ] ),
      'CVC' : new FormControl( null, [
        Validators.required,
        Validators.pattern("[0-9]{3}")
      ] )
    })
  }
  CardNumberSpace(): string {
    let num = String(this.cardData.get('CardNumber')?.value)
    let result:string = ''
    let count:number = 3
    for(let symbol of num) {
      result += symbol
      if(count == 0) {
        result += " "
        count = 4
      }
      count --
    }
    return result
  }
  onSubmit() {
    console.log(this.CardNumberSpace())
  }
}
