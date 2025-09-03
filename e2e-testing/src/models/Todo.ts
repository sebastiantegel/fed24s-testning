export class Todo {
  id: number;
  text: string;

  constructor(text: string) {
    this.id = Date.now();
    this.text = text;
  }
}
