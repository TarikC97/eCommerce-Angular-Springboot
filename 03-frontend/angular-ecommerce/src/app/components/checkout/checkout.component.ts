import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Country } from 'src/app/common/country';
import { State } from 'src/app/common/state';
import { TCShopFormService } from 'src/app/services/tcshop-form.service';
import { TCShopValidators } from 'src/app/validators/tcshop-validators';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  checkoutFormGroup!: FormGroup;
  totalPrice: number = 0;
  totalQuantity: number=0;

  creditCardYears: number[]=[]
  creditCardMonths: number[]=[]

  countries: Country[]=[]
  shippingAddressStates: State[]=[]
  billingAddressStates: State[]=[]


  constructor(private formBuilder: FormBuilder,
              private tcShopFormService: TCShopFormService){}

  ngOnInit(): void{
    this.checkoutFormGroup = this.formBuilder.group({
      customer: this.formBuilder.group({
        firstName: new FormControl('',
                    [Validators.required,Validators.minLength(4), TCShopValidators.notOnlyWhiteSpace]),
        lastName: new FormControl('',
                    [Validators.required,Validators.minLength(3),TCShopValidators.notOnlyWhiteSpace]),
        email: new FormControl('',
                              [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])
      }),
      shippingAddress: this.formBuilder.group({
        street:[''],
        city:[''],
        state:[''],
        country:[''],
        zipCode:['']
      }),
      billingAddress: this.formBuilder.group({
        street:[''],
        city:[''],
        state:[''],
        country:[''],
        zipCode:['']
      }),
      creditCard: this.formBuilder.group({
          cardType:[''],
          nameOnCard:[''],
          cardNumber:[''],
          securityCode:[''],
          expirationMonth:[''],
          expirationYear:['']
      })
    })
    //populate credit card months,date starts from 0
    const startMonth: number = new Date().getMonth()+1
    console.log("Start month:"+startMonth)

    this.tcShopFormService.getCreditCardMonths(startMonth).subscribe(
      data=>{
        console.log("Retrivied credit card months"+JSON.stringify(data))
        this.creditCardMonths = data
      }
    )
    //populate countries
    this.tcShopFormService.getCountries().subscribe(
      data=>{
        this.countries = data
      }
    )
    //populate credit card years
    this.tcShopFormService.getCreditCardYears().subscribe(
      data=>{
        this.creditCardYears = data
      }
    )
  }
  onSubmit(){
    // console.log("Submit button")
    // console.log(this.checkoutFormGroup.get('customer')?.value)
    // console.log("Country Address is:"+this.checkoutFormGroup.get('shippingAddress')?.value.country.name)
    // console.log("State Address is:"+this.checkoutFormGroup.get('shippingAddress')?.value.state.name)
    if(this.checkoutFormGroup.invalid){
      //Touching all fields triggers the display of error msg.
      this.checkoutFormGroup.markAllAsTouched()
    }
  }

  copyShippingAddressToBillingAddress(event: any) {
      if(event.target.checked){
        this.checkoutFormGroup.controls['billingAddress']
        .setValue(this.checkoutFormGroup.controls['shippingAddress'].value);
        //bug fix for states in billingaddress
        this.billingAddressStates = this.shippingAddressStates
      }
      else{
        this.checkoutFormGroup.controls['billingAddress'].reset()
        //reset states too
        this.billingAddressStates=[]
      }
    }

    get firstName(){return this.checkoutFormGroup.get('customer.firstName')}
    get lastName(){return this.checkoutFormGroup.get('customer.lastName')}
    get email(){return this.checkoutFormGroup.get('customer.email')}


    handleMonthsAndYears(){
      const creditCardFormGroup = this.checkoutFormGroup.get('creditCard')

      const currentYear: number = new Date().getFullYear()
      const selectedYear: number = Number(creditCardFormGroup?.value.expirationYear)
      //if the current year equals selected, start month 1
      let startMonth: number;
      if(currentYear === selectedYear){
        startMonth = new Date().getMonth()+1
      }
      else{
        startMonth=1
      }
      this.tcShopFormService.getCreditCardMonths(startMonth).subscribe(
        data=>{
          this.creditCardMonths = data
        }
      )
    }
    getStates(formGroupName: string){
      const formGroup = this.checkoutFormGroup.get(formGroupName)

      const countryCode = formGroup?.value.country.code;
      const countryName = formGroup?.value.country.name;

      this.tcShopFormService.getStates(countryCode).subscribe(
        data=>{
          if(formGroupName === 'shippingAddress'){
            this.shippingAddressStates = data
          }
          else{
            this.billingAddressStates = data
          }
          //Select first state as default
          formGroup?.get('state')?.setValue(data[0])
        }
      )

    }
}
