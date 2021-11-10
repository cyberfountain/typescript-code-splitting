import { F as Foo } from './Foo-8ba87b7c.js';

new Foo();
(async () => {
    const m = await import('./Dog-38550b67.js')
        .then(m => m.default);
    const dog = new m();
    dog.bark();
})();
console.log("ts");
//# sourceMappingURL=app.js.map
