import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommunicationServiceService } from '../../../services/communication-service.service';

@Component({
  selector: 'app-investment-container',
  standalone: false,
  templateUrl: './investment-container.component.html',
  styleUrl: './investment-container.component.scss'
})
export class InvestmentContainerComponent implements OnInit{

  investmentForm!:FormGroup;
  id:number = 1;
  formVal:any = []

  constructor(private fb:FormBuilder, private service:CommunicationServiceService){
    this.constructForm();
    this.quantityPrice()
  }

  ngOnInit(): void {
    this.investmentForm.controls['id'].setValue(this.id++)
  }


  constructForm(){
    this.investmentForm = this.fb.group({
      id: ['', Validators.required],
      investmentType:['', Validators.required],
      invsetmentName:['', Validators.required],
      invsetmentPrice:['', [Validators.required, Validators.min(100), Validators.minLength(3)]],
      quantity:['', [Validators.required]],
      totalInvestment:['', [Validators.required]]
    })
  }
   

  quantityPrice(){
    this.investmentForm.controls['invsetmentPrice'].valueChanges.subscribe((cost:any) => {
       console.log("cost", cost)
       let price = this.investmentForm.controls['invsetmentPrice'].value
       let total = price * cost
       console.log('total', total)
        this.investmentForm.controls['totalInvestment'].setValue(total)
    })
  }


  submit(){
    //this.investmentForm.controls['id'].setValue(this.id++)
    console.log("form Value", this.investmentForm.value);
    this.formVal.push(this.investmentForm.value)
    this.service.setDashBoardData(this.formVal);
    this.investmentForm.controls['id'].setValue(this.id++)
    // this.investmentForm.reset();
    // this.investmentForm.markAsTouched();
    
  }

}
