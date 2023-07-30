export function apiInterface(): string {
  return 'api-interface';
}

export type CreateTodoDto = {
  name: string;
  createdAt: Date;
}

export type Todo = {
  name: string;
  createdAt: Date;
}

