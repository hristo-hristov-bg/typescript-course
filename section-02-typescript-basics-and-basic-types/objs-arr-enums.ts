// const person: {
//     name: string;
//     age: number;
// } = {
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//   name: "Hristo",
//   age: 39,
//   hobbies: ["Sports", "Movies"],
//   role: [2, "author"],
// };

enum Role { ADMIN, READ_ONLY, AUTHOR };

const person = {
  name: "Hristo",
  age: 39,
  hobbies: ["Sports", "Movies"],
  role: Role.ADMIN,
};

let favoriteActivities: string[];

favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby);
}
