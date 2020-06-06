import { FooterComponent } from './footer/footer.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {IonicModule} from '@ionic/angular';
import {CardComponent} from './card/card.component';

@NgModule({
    declarations: [HeaderComponent, CardComponent,FooterComponent],
    imports: [
        CommonModule,
        IonicModule
    ],
    exports: [
        HeaderComponent,
        CardComponent,
        FooterComponent
    ]
})
export class ComponentsModule {
}
