export class Switch {
    key: string;
    name: string;
    icon: string;
    stateless: boolean;
    state: any;
    type: string;
    scheduled: object;

    public getCheckedState(): string {
        return parseInt(this.state, 0) === 1 ? 'checked' : '';
    }
}
