import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page'


@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
})
export class ProjectsPage implements OnInit {
  demo: Boolean = false;
  imgDemo: Boolean = true;

  projectDemoValue: Number = 0;

  constructor(public modalController: ModalController) { }

  ngOnInit() {
   }

  // showDemo() {
  //   this.demo = !this.demo;
  //   this.imgDemo = !this.imgDemo;
  //   console.log(this.demo);
  //   console.log(this.imgDemo);
  // }
  
  async openModal(num: Number) {
    this.projectDemoValue = num;
    this.modalController.create({
      component: ModalPage,
      cssClass: 'my-custom-modal-css',
      componentProps: {
        'projectDemoValueProp': this.projectDemoValue,
      }
    }).then((modal) => {
      modal.present()
    })
  }

}
