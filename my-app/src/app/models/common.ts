export interface ModelI {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface ModelParent {
  name: string;
  age: number;
  description: string;
}

export interface TemplateFromParent {
  $implicit: ModelParent;
}
