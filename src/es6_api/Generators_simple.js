var fibonacci = {
    [Symbol.iterator]: function*() {
        let count = 1;
        yield 'step-'+count++;
        yield 'step-'+count++;
        yield 'step-'+count++;
    }
}

for (var n of fibonacci) console.log(n)