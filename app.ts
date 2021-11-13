//Tuple, when you need exactly x amount of z,x,y types
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

//Enum, human-readable identifiers that have mapped values behind the scenes. Constants you can easily relate to.
enum Role { ADMIN = 10, READ_ONLY, AUTHOR };
const person2 = {
  name: 'somename',
  age: 1,
  hobbies: ['eat', 'walk'],
  role: Role.ADMIN
}