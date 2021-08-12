Create Table Users(
   id serial primary key,
   name varchar(200) not null,
   lastName varchar(200) not null,
   CPF varchar(14) not null,
   RG varchar(13) not null,
   Email varchar(200) not null UNIQUE,
   Password varchar(200) not null,
   createdAt DATE NOT NULL DEFAULT CURRENT_DATE
)
