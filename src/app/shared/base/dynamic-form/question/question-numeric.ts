import { QuestionBase } from './question-base';

export class NumericQuestion extends QuestionBase<number> {
  override controlType = 'numeric';
}
