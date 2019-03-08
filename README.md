# NodeJs Deisgn Patterns

> Design Patterns implemented in NodeJs

## What are Design Patterns ?

Resuable, reliable solutions to problems that we face every day in software development

## Importance of Design Patterns

- Cataloged solutions
- Reusable in many different situations
- Well documented
- Language of collaboration
- Improve architecture
- Write better code
- Become better programmer

## Types of Design Patterns

#### Creational Patterns

These design patterns provide a way to create objects while hiding the creation logic, rather than instantiating objects directly using new operator. This gives program more flexibility in deciding which objects need to be created for a given use case.

- [Singletone](src/creational/singletone/README.md)
- [Prototype](src/creational/prototype/README.md)
- [Factory](src/creational/factory/README.md)
- [Builder](src/creational/builder/README.md)

#### Structural Patterns

These design patterns concern class and object composition

- [Adapter](src/structural/adapter/README.md)
- [Proxy](src/structural/proxy/README.md)
- [Composites](src/structural/composites/README.md)
- [Decorator](src/structural/decorator/README.md)

#### Behavioral Patterns

These design patterns are specifically concerned with communication between objects.

- [Observer](src/behavioral/observer/README.md)

### What is Anti-Pattern?

is a pattern that tells how to go from a problem to a bad solution.
OR is a bad pattern that we should avoid in our code.
example of the anti pattern in Node "callback hell"
