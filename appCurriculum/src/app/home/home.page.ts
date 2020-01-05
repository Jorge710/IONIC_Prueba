import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  currentDate;
  formattedDate;
  formattedDateObj;
  unixTime;
  edadActual;
  anio;
  constructor(public navCtrl: NavController) {
    this.currentDate = new Date()
    this.getFormattedDate()
    this.unixTime = this.currentDate.getTime()
  }

  
  getFormattedDate(){
    var dateObj = new Date()

    var fNac = dateObj.getUTCFullYear() - 1993;
    var year = dateObj.getFullYear().toString()
    var month = dateObj.getMonth().toString()
    var date = dateObj.getDate().toString()

    var monthArray = ['Ene','Feb','Mar','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic']
    this.formattedDate = year + '/' + monthArray[month] + '/' + date;
    this.formattedDateObj = new Date(this.formattedDate);
    this.edadActual = fNac;    
  }

}
