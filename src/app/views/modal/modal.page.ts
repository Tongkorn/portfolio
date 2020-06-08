import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  projectDemoValueProp:null;
  currentDemoModal:Number = 0;
  constructor(public modalController: ModalController) { }

  ngOnInit() {
    console.log(this.projectDemoValueProp);
    this.currentDemoModal = this.projectDemoValueProp
  }
  
  async closeModal() {
    console.log('close modal');
    this.currentDemoModal = 0;
    await this.modalController.dismiss()
  }
}
