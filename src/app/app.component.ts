import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ListaTarefas } from 'src/models/listaTarefas.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public listaTarefas: ListaTarefas[] = [];
  public title: String = 'Tarefas';
  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required
      ])]
    });
    this.load();
  }

  adicionar(){
    const titulo = this.form.controls['title'].value;
    const index = this.listaTarefas.length + 1;
    this.listaTarefas.push(new ListaTarefas(index, titulo, false));
    this.salvar();
    this.limpar();
  }

  remover(tarefa: ListaTarefas){
    const index = this.listaTarefas.indexOf(tarefa);
    if(index !== -1){
      this.listaTarefas.splice(index, 1);
    }
    this.salvar();
  }

  marcarConcluido(tarefa: ListaTarefas){
    tarefa.done = true;
    this.salvar();
  }

  marcarNaoConcluido(tarefa: ListaTarefas){
    tarefa.done = false;
    this.salvar();
  }

  limpar(){
    this.form.reset();
  }

  salvar(){
    const dados = JSON.stringify(this.listaTarefas);
    localStorage.setItem('listaTarefas', dados);
  }

  load(){
    this.listaTarefas = JSON.parse(localStorage.getItem('listaTarefas') || '{}');
  }
}
