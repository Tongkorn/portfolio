import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() { }
  
  mailTo() {
    let mail = document.createElement("a");
    mail.href = "mailto:tongkorn.p@gmail.com?subject=files&body=Hi, Tongkorn";
    mail.click();
  }

}
