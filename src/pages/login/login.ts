import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController } from 'ionic-angular';
import { ListaProvider } from './../../providers/lista/lista';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  usuario:object = {
    login: '',
    senha: '',
    administrador: false
  };
  mensagem:string = 'ddsdfd';
  lista: {};

  constructor(public navCtrl: NavController, 
              public loadingCtrl: LoadingController,
              public toastCtrl: ToastController,
              private listaProvider: ListaProvider) {
  }

  entrar() {
    this.exibirAguarde();
    this.mensagem = 'Bem vindo ' + this.usuario.login;
  }

  exibirAguarde() {
    let loading = this.loadingCtrl.create({
      content: 'Autenticando...'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
      this.showToast('top', this.usuario.login);
    }, 1000);
  }

  showToast(position: string, usuario: string) {
    let toast = this.toastCtrl.create({
      message: 'Senha inválida para o usuário: ' + usuario,
      duration: 2000,
      position: position
    });

    toast.present(toast);
    this.carregarLista();
  }

  carregarLista(){
    this.listaProvider.buscaLista().subscribe(result => this.lista = result );
  }

}
