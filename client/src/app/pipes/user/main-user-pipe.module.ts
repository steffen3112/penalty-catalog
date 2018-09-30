import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NamePipe } from './name.pipe';

@NgModule({
    declarations: [NamePipe],
    imports: [CommonModule],
    exports: [NamePipe]
})
export class MainUserPipe { }