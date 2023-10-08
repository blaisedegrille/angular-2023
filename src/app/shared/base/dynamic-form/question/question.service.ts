import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { QuestionBase } from './question-base';
import { DropdownQuestion } from './question-dropdown';
import { TextboxQuestion } from './question-textbox';
import { User } from 'src/app/models/user';
import { NumericQuestion } from './question-numeric';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  getQuestions(user: User) {
    const questions: QuestionBase<any>[] = [
      /*       new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          { key: 'solid', value: 'Solid' },
          { key: 'great', value: 'Great' },
          { key: 'good', value: 'Good' },
          { key: 'unproven', value: 'Unproven' },
        ],
        order: 3,
      }), */
      /*       new NumericQuestion({
        key: 'id',
        label: 'Id',
        value: user.id,
        disabled: true,
        displayed: false,
        required: false,
        order: 1,
      }), */

      new TextboxQuestion({
        key: 'name',
        label: 'First name',
        value: user.name,
        required: true,
        order: 1,
      }),

      new TextboxQuestion({
        key: 'email',
        label: 'Email',
        value: user.email,
        required: true,
        type: 'email',
        order: 2,
      }),
    ];

    return of(questions.sort((a, b) => a.order - b.order));
  }
}
