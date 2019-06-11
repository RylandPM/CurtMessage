drop table if exists message;
drop table if exists usersproj;

create table usersproj
(
    user_id serial primary key,
    username varchar(40) not null,
    password text not null,
    email text not null
);

insert into usersproj
    (username, password, email)
values
    ('curt', 'curtcurt', 'curt@curt.curtcurt'),
    ('joe', 'joejoe', 'hoe@joe.curt');

create table message
(
    message_id serial primary key,
    message text not null,
    user_id int references usersproj(user_id),
    time_entered date default now(),
    FOREIGN KEY(user_id) references usersproj(user_id)
);

insert into message
    (message, user_id)
values
    ('Hory SHIIIT', 2),
    ('JESUS CHRIST', 1),
    ('Za Warudou', 2),
    ('CURT CURT CURT CURT CURT', 1);

select usersproj.user_id, username, email, message_id, message, time_entered
from usersproj join message
    on (usersproj.user_id = message.user_id)