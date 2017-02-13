create table savedbeer (
    id serial primary key,
    description text,
    imageurl text,
    name text,
    type text,
    breweryId varchar(20),
    userId varchar(40)
);
