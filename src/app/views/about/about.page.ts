import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  mailTo() {
    let mail = document.createElement("a");
    mail.href = "mailto:tongkorn.p@gmail.com?subject=files&body=Hi, Tongkorn";
    mail.click();
  }

}
