interface ChildRoute {
  label: string;
  uri: string;
}

export interface HeaderRoute extends ChildRoute {
  hasChildren: boolean;
  children?: ChildRoute[];
}
