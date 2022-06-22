export class ApiResponse {
    public _embedded: Array<Switch> = [];
}

export class Switch {
  public constructor(
    public name: string,
    public group: string,
    public key: string,
    public state: string,
    public when: string,
    public scheduled: string | null,
    public durations: string[] | null,
    public icon: string,
    public type: string
  ) {}
}
