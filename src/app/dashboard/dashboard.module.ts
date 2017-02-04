import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from '../navbar/index';
import { DashboardComponent } from './index';
import { LetterAvatarModule } from '../shared/letter-avatar/index';

@NgModule({
    declarations: [
        DashboardComponent
    ],
    exports: [
        DashboardComponent,
    ],
    imports: [
        CommonModule,
        NavbarModule,
        LetterAvatarModule
    ]
})
export class DashboardModule {
}
