export class Person {
  constructor(protected name: string) {}

  sayHi(): void {
    console.log(`Hello from ${this.name}!`)
  }
}
