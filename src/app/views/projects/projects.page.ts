import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
})
export class ProjectsPage implements OnInit {
  projectDemoValue: String = null;

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async openModal(projectId: String) {
    this.projectDemoValue = projectId;
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
  goToGitlab(projectName) {

    let linkName = document.createElement("a");

    if (projectName === 'retailApp') {
      linkName.href = "https://gitlab.com/tongkorn.p/retail-app";
      linkName.click();
    } else if (projectName === 'retailAdmin') {
      linkName.href = "https://gitlab.com/tongkorn.p/retail-admin";
      linkName.click();
    } else if (projectName === 'dorm'){
      linkName.href = "https://gitlab.com/passakornC/cc3_training";
      linkName.click();
    }
  }

}
