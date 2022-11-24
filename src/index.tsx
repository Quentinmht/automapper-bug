import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createMap, createMapper, forMember, mapFrom } from '@automapper/core';
import { classes } from '@automapper/classes';
import { Bio } from './models/Bio';
import { BioDto } from './models/BioDto';
import { User } from './models/User';
import { UserDto } from './models/UserDto';
import { Job } from './models/Job';

// Create and export the mapper
export const mapper = createMapper({
    strategyInitializer: classes(),
});

createMap(mapper, Bio, BioDto);
createMap(mapper, User, UserDto);
/* WITH FORMEMBER IT'S WORKING
createMap(mapper, User, UserDto, forMember(
      (d) => d.firstName,
      mapFrom((s) => s.firstName),
    ));
*/

const user = new User();
user.firstName = 'Chau';
user.lastName = 'Tran';
user.username = 'ctran';
user.password = '123456';
user.bio = new Bio();
user.bio.avatarUrl = 'google.com';
user.bio.birthday = new Date();
user.bio.job = new Job();
user.bio.job.title = 'Developer';
user.bio.job.salary = 99999;

const dto = mapper.map(user, User, UserDto);

// DTO IS EMPTY WITHOUT FORMEMBER
console.log(dto);



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
