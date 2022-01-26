import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  appName = "Angular Converter";

  rialValue: number = 0;
  usdValue: number = 0;
  usdValueInput: string = "";

  fetchPrice() {
    fetch("https://api.tgju.online/v1/data/sana/json")
      .then(result => {
        return result.json();
      })
      .then(data => {
        let usdItem = data.sana.data.find(i => i.slug === 'sana_buy_usd');
        let usd = parseInt(usdItem.p);
        
        this.usdValue = usd;
        this.rialValue = (parseInt(this.usdValueInput) | 0) * usd;
      })
      .catch(err => {
        console.log(err);
      });
  }
}