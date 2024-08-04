import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EjerciciosListComponent } from './exercise-list.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: EjerciciosListComponent }
    ])],
    exports: [RouterModule]
})
export class ExerciseListRoutingModule { }
