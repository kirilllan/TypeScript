//tuple, when you need exactly x amount of z,x,y types
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: 'somename',
  age: 1,
  hobbies: ['eat', 'walk'],
  role: [2, 'author']
}