# Angular excersises

Feel free to search online or check the powerpoint if you encounter problems

## Setup

1. install NodeJS and clone this Repo
2. run `npm install`
3. run `npm i -g @angular/cli`
4. read [README.md](./README.md)
5. run ng serve to start the dev server

## First excersise

1. Create new module
   1. add new folder users and create a file `users.module.ts`
   2. add boilerplate module code (NgModule is imported from `@angular/core`)
   3. add usermodule to `app.module` imports
2. Create new Component
   1. add all three component files `users.component.(ts|html|css)`
   2. implement the component
   3. add component to `users.module` declarations and export
   4. add selector to `app.component`
   5. check if your html code is displayed under `localhost:4200`
3. Create Service
   1. add new file `users.service.ts`
   2. implement a rudimentary service that implements `IUsersService`
   3. add service to `users.module` providers
   4. modify the `users.component` to load a user from the `users.service` in the `ngOnInit` hook and display the username

## Second excersise

1. Follow the steps above to create a new `products` module and component (You may use the CLI)
2. Display the contents of the products.json file using angular directives
