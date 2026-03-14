create table users(
    id SERIAL PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    created_at timestamp default current_timetamp 
)

INSERT INTO USERS (NAME , EMAIL) VALUES ('JHONATAN','jhONATAN@GMAIL.COM')