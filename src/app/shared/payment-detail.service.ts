import { PaymentDetail } from './payment-detail.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  formData: PaymentDetail;
  readonly rootURL = 'http://localhost:54447/api';
  list : PaymentDetail[];

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
                 'Content-Type': 'application/json',
                 'Access-Control-Allow-Origin': '*',
                 'Access-Control-Allow-Credentials': 'true'
    })
  };
  
  postPaymentDetail() {
    return this.http.post(this.rootURL + '/PaymentDetail', this.formData, this.httpOptions)
  }
  putPaymentDetail() {
    return this.http.put(this.rootURL + '/PaymentDetail/'+ this.formData.PMId, this.formData, this.httpOptions);
  }
  deletePaymentDetail(id) {
    return this.http.delete(this.rootURL + '/PaymentDetail/'+ id);
  }

  refreshList(){
    this.http.get(this.rootURL + '/PaymentDetail', this.httpOptions)
    .toPromise()
    .then(res => this.list = res as PaymentDetail[]);
  }
}
