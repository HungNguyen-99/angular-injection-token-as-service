

export class TestStaticClass {
    static sum(a: number, b: number){
        return a + b;
    }

    static checkChange(value: number){
        value = value + 2;
        console.log('static file: ', value);
        return value = value;
    }
}

