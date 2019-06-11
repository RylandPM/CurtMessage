# Curt Message App.com/curt?name=curt

## frontend

### dependencies

- axios
- react-reduxt
- redux
- react-router-dom (BrowserRouter)
- react-icons/fa
- http-proxy-middleware

### file-structure

- src/

  - components/

    - Header/ - Header.js - Header.css
      -Profile/ - Profile.js - Profile.css
    - MessageDisplay
      - CreateMessage.js
      - MessageDisplay.js
      - MessageDisplay.css

  - App.js
  - index.js
  - reset.css
  - dux/
    - store.js
    - reducer.js

## Routes

- Home => /
- Profile => /profile
- Message => /messages
- CreateRoute => /create-message
- catchAll => '\*'

## Redux State

```js
const initialState = {
  user: null,
  messages: []
};
```

## backend

### dependencies

- express
- massive
- dotenv
- express-session
- bcrypt

### folder structure

- server/
  - index.js
  - controller/
    - messageController
    - authController

### endpoint routes

**auth**

- login: => /api/login
- register: => /api/register
- userInfo: => /api/user

**message**

- getMessages: => /api/messages
- postMessage: => /api/messages
- updateMessage: => /api/messages/:id
- deleteMessage: => /api/messages/:id

### database

- users

```sql
create table usersproj (
    user_id serial primary key,
    username varchar(40) not null,
    password text not null,
    email text not null
);
```

- message

```sql
create table message (
    message_id serial primary key,
    message text not null,
    user_id int references usersproj(user_id),
    time_entered date default now()
    FOREIGN KEY(user_id) references usersproj(user_id)
);
```

### dotenv

```text
SESSION_SECRET=
SERVER_PORT=
CONNECTION_STRING=
```
