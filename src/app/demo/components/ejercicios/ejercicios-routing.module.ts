import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'listar', loadChildren: () => import('./error/error.module').then(m => m.ErrorModule) },
        //{ path: 'agregar', loadChildren: () => import('./access/access.module').then(m => m.AccessModule) },
        //{ path: 'eliminar', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class AuthRoutingModule { }