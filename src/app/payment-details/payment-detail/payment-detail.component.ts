import { PaymentDetailService } from './../../shared/payment-detail.service';
import { Component, OnInit, HostBinding } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ThemeService } from 'src/app/shared/theme.service';
import {SelectItem} from 'primeng/api';
import { OverlayContainer} from '@angular/cdk/overlay';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styles: []
})
export class PaymentDetailComponent implements OnInit {
  selectedTheme: string;
  themeService: ThemeService;
  cities1: SelectItem[];  
  selectedCity1: City;

  constructor(public service: PaymentDetailService, public overlayContainer: OverlayContainer) { 
    this.cities1 = [
      {label:'Select City', value:null},
      {label:'New York', value:{id:1, name: 'New York', code: 'NY'}},
      {label:'Rome', value:{id:2, name: 'Rome', code: 'RM'}},
      {label:'London', value:{id:3, name: 'London', code: 'LDN'}},
      {label:'Istanbul', value:{id:4, name: 'Istanbul', code: 'IST'}},
      {label:'Paris', value:{id:5, name: 'Paris', code: 'PRS'}}
  ];
  }

  @HostBinding('class') componentCssClass;

  onSetTheme(theme:any) {
    this.overlayContainer.getContainerElement().classList.add(theme);
    this.componentCssClass = theme;
  }

  ngOnInit() {
    this.resetForm();
  }
  
  resetForm(form?: NgForm) {
    if (form != null)
      form.form.reset();
    this.service.formData = {
      PMId: 0,
      CardOwnerName: '',
      CardNumber: '',
      ExpirationDate: '',
      CVV: ''
    }
  }  

  onSubmit(form: NgForm) {
    if (this.service.formData.PMId == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }
  
  insertRecord(form: NgForm) {
    this.service.postPaymentDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
      },
      err => { console.log(err); }
    )
  }
  
  updateRecord(form: NgForm) {
    this.service.putPaymentDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }

  onThemeSelect() {
    this.selectedTheme = "Afterdark";
    this.themeService.setTheme(this.selectedTheme);
  }
  
}


interface City {
  name: string;
  code: string;
}