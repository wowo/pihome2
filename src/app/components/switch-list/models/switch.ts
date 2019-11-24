export class Switch {
    key: string;
    name: string;
    icon: string;
    stateless: boolean;
    state: any;
    type: string;

    get castedState() {
        switch (this.state) {
            default:
                return this.state;
        }
    }
}
