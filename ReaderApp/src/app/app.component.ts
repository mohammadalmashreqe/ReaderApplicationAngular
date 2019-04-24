import { Component } from '@angular/core';
import { GetConfigService } from './get-config.service';

import * as $ from 'jquery';
import { identifierModuleUrl } from '@angular/compiler';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle: string = 'Reader';
  List: IAttributes[] = [];
  mydata: string;
  errorMessage = '';
  constructor(private service: GetConfigService) {


  

    this.service.getConfig().subscribe(
      products => {
        this.List = products;

      },
      error => this.errorMessage = <any>error
    );


    
    



  }
  Read(datavalidator:boolean): void {
    var arr= new Array(this.List.length);

    if(!datavalidator)
    {
     
      var result= this.mydata.split(' ');

      for (var i=0;i<this.List.length;i++)
      { var regualrExp= new RegExp(this.List[i].regularExpression);
        for(var j=0;j<result.length;j++)
        {
         
          if(regualrExp.test(result[j]))
          {
            arr.push(result[j]);
          }
          
        }
      }
      console.log(arr);

    }
    


  }
}
