import { Component } from '@angular/core';
import { GetConfigService } from './get-config.service';


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
  AttributesList: IAttributes[] = [];
  /**
   * Mydata  of app component
   */
  entredData: string;
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
          this.AttributesList = products;

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
    try {
      if (!datavalidator) {



        for (var i = 0; i < this.AttributesList.length; i++) {
          var regualr = new RegExp(this.AttributesList[i].regularExpression)
          var matchingItem = regualr.exec(this.entredData);

          var item = { name: this.AttributesList[i].name, value: matchingItem[0] };
          this.Result.push(item);

        }


        document.getElementById("labelError").style.display = "none";












      }
      else {
        document.getElementById("labelError").style.display = "block";
        document.getElementById("labelError").style.color = "red";
      }
    }
    catch (err) {
      console.log(err);
    }
  }

}
