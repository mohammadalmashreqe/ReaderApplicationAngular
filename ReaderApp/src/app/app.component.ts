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
  /**
   * Page title of app component
   */
  pageTitle: string = 'Reader';
  /**
   * List  of app component
   */
  List: IAttributes[] = [];
  /**
   * Mydata  of app component
   */
  mydata: string;
  /**
   * Error message of app component
   */
  errorMessage = '';
  /**
   * Result  of app component
   */
  Result: any[] = [];
  /**
   * Creates an instance of app component.
   * @param service 
   */
  constructor(private service: GetConfigService) {


    try {

      this.service.getConfig().subscribe(
        products => {
          this.List = products;

        },
        error => this.errorMessage = <any>error
      );


    }
    catch (err) {
      console.log(err);
    }





  }

  /**
   * Reads app component
   * @param datavalidator 
   */
  Read(datavalidator: boolean): void {
    try { if (!datavalidator) {
      var spiltdata = this.mydata.split(' ');
      var tempList = new Array();

     

        for (var i = 0; i < this.List.length; i++) {
          var temp = new Array();
          temp.push(this.List[i].name);
          for (var j = 0; j < spiltdata.length; j++) {
            var regualr = new RegExp(this.List[i].regularExpression)
            if (regualr.test(spiltdata[j])) {
              temp.push(spiltdata[j]);
            }

          }
          tempList.push(temp);



        }
        this.Result = tempList;

        console.log(this.Result);
      }



    }
    catch (err) {
      console.log(err);
    }
  }

}
