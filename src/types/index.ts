export interface Statuses {
  STARTED: "started";
  PAUSED: "paused";
  RESUMED: "resumed";
  COMPLETED: "completed";
}

export interface Settings {
  assetsUrl: string;
  baseUrl: string;
}

export interface State {
  status: string;
}

export interface UpdatableProps {
  status: string;
}

export interface AppInterface {
  updateProps(values: UpdatableProps): void;

  readonly statuses: Statuses;
  readonly container: HTMLElement;
}
