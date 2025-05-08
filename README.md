## Interview Questions



### 1: What is the use of the `keyof` keyword in TypeScript?

#### Explanation:
The `keyof` keyword returns a union type consisting of all the keys (property names) of a given object type.

#### Why is it useful?
- Reduces mistakes when accessing dynamic object keys.
- Helps you write type-safe and maintainable code.
- Improves readability and development experience.

#### Example:
```ts
type Car = {
  brand: string;
  model: string;
  year: number;
};

type CarKeys = keyof Car; // "brand" | "model" | "year"

function logKey(key: CarKeys) {
  console.log("Key is:", key);
}

logKey("model"); // ✅ Valid
logKey("price"); // ❌ Error
```

---

### 2: How does TypeScript improve code quality and maintainability?

#### Benefits:

1. **Type Safety:**  
   It catches type-related errors during development.

2. **IntelliSense:**  
   Smarter code suggestions in editors improve speed and accuracy.

3. **Easy Refactoring:**  
   Code changes propagate safely across the project.

4. **Better Team Collaboration:**  
   Clear type definitions help others understand your code faster.

5. **Less Need for Documentation:**  
   The code becomes self-explanatory through types and interfaces.

---

### 3: How do union and intersection types work in TypeScript?

#### **Union Type (`|`)**
Allows a variable to be of one of several types.

```ts
let input: string | number;
input = "hello"; // ✅
input = 100;     // ✅
```

#### **Intersection Type (`&`)**
Combines multiple types into one, where the result must satisfy all combined types.

```ts
type A = { name: string };
type B = { age: number };

type C = A & B;

const person: C = {
  name: "Mahdi Hassan",
  age: 22
};
```

---



Happy Coding!✅