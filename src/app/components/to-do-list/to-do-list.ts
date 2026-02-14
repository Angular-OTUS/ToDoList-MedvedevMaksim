import { Component, signal, effect, WritableSignal, computed } from '@angular/core';
import { ToDoItem } from '../to-do-item/to-do-item';
import { Todo } from '../../model/types';

// сделать кнопку добавления списка неактивной если в Input элемент ничего не введено.
// Добавить к кнопке стили для disabled состояния: opacity 0.5

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.html',
  styleUrl: './to-do-list.scss',
  imports: [ToDoItem],
})
export class ToDoList {
  todos = signal<Todo[]>([
    { id: 1, text: 'Сделать зарядку' },
    { id: 2, text: 'Прочитать главу книги' },
    { id: 3, text: 'Ответить на письма' },
    { id: 4, text: 'Купить продукты' },
    { id: 5, text: 'Позвонить родителям' },
    { id: 6, text: 'Разобрать рабочие задачи' },
    { id: 7, text: 'Сходить на прогулку' },
    { id: 8, text: 'Оплатить счета' },
    { id: 9, text: 'Сделать резервную копию' },
    { id: 10, text: 'Подготовить план на завтра' },
  ]);

  searchValue = signal<string>('test value');

  isButtonDisabled = computed(() => this.searchValue().length > 0);

  private log = effect(() => {
    console.log('search value ', this.searchValue());
    console.log('buttonDisabled:', this.isButtonDisabled());
  });

  onSearchChange(event: Event) {
    const inputEvent = event.target as HTMLInputElement;
    this.searchValue.set(inputEvent.value);
  }
}
