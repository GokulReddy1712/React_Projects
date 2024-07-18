async function foo(){
    return "hello world"
}

const foo2 = await foo()
console.log(foo2);