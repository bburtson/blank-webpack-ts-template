export class Foo {
    public message = 'Its working, this message called from Foo.Bar();              ';
    private model = '';
    public ele = document.getElementById('marquee');
    constructor() { }

    public Bar(): void {
        setInterval(() => {
            if (this.model.length < this.message.length) {
                this.model += this.message[this.model.length];
                this.ele.innerText = this.model;
            } else {
                this.ele.innerText = '';
                this.model = '';
            }
        }, 100)

    }

}