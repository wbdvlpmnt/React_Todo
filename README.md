# React_Todo

This is a todo list application front-end created with React, Typescript, Vite, Vittest.

The purpose of this project is to create a simple application to learn the basic principles of React and unit testing. This is also my first introduction to unit testing react applications and working with vittest.

# Goal

To create a fullstack application that has some helpful examples of unit testing.

<img width="800" alt="Screenshot 2023-07-27 at 1 38 25 PM" src="https://github.com/wbdvlpmnt/React_Todo/assets/139825457/82a51847-243b-4267-bd23-6b2aeb1705d9">

# Key Takeaways

Structure the app in a way where you can separate the logic and service calls out of your components. Keeping the components as simple as possible will make them easier to test. Extracting logic and services from components allows you to test the logic in isolation and reduces the coupling between the component and the logic.

App Structure Example

<img width="215" alt="Screenshot 2023-07-28 at 10 02 53 AM" src="https://github.com/wbdvlpmnt/React_Todo/assets/139825457/6cde1a87-71cd-40c9-bc2c-5a205cf22a5c">

Simplify Components Example

<img width="788" alt="Screenshot 2023-07-28 at 10 03 56 AM" src="https://github.com/wbdvlpmnt/React_Todo/assets/139825457/0ee0b8d4-f387-4c06-8eed-e566515ea48d">

Extract Logic Example

<img width="708" alt="Screenshot 2023-07-28 at 10 04 25 AM" src="https://github.com/wbdvlpmnt/React_Todo/assets/139825457/5f4400c5-0199-4a94-b191-94b4b9d019e6">

Extract Services Example

<img width="645" alt="Screenshot 2023-07-28 at 10 04 42 AM" src="https://github.com/wbdvlpmnt/React_Todo/assets/139825457/1c20735f-a532-4f45-a5a2-38b252875145">

When testing the components bring in the logic and services, and spy or mock them in the unit tests. Remember to test the logic and services as well in their own tests. These are unit tests we want to test each unit independently.

<img width="789" alt="Screenshot 2023-07-28 at 10 05 07 AM" src="https://github.com/wbdvlpmnt/React_Todo/assets/139825457/faf3bc3d-466b-4ecc-b087-ada651f295f7">








# Current Test Coverage

| File            | % Stmts   | % Branch   | % Funcs   | % Lines   | Uncovered Line #s   |
| --------------- | --------- | ---------- | --------- | --------- | ------------------- |
| All files       | 93.15     | 80         | 100       | 93.15     |
| components      | 100       | 100        | 100       | 100       |
| form.tsx        | 100       | 100        | 100       | 100       |
| header.tsx      | 100       | 100        | 100       | 100       |
| list.tsx        | 100       | 100        | 100       | 100       |
| listItem.tsx    | 100       | 100        | 100       | 100       |
| handlers        | 93.75     | 71.42      | 100       | 93.75     |
| form.ts         | 100       | 87.5       | 100       | 100       | 22                  |
| list.ts         | 100       | 50         | 100       | 100       | 19                  |
| updateUi.ts     | 81.81     | 50         | 100       | 81.81     | 18,33               |
| services        | 80        | 100        | 100       | 80        |
| service.ts      | 80        | 100        | 100       | 80        | 17,35,52            |
| --------------- | --------- | ---------- | --------- | --------- | ------------------- |
