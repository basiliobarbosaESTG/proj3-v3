CREATE TABLE User (
  id SERIAL,
  email TEXT NOT NULL,
  name TEXT,
  PRIMARY KEY (id)
);

CREATE UNIQUE INDEX email_unique ON User(email(20));

-- alter table User ADD UNIQUE(email(20), name(20));

SHOW INDEXES FROM User;

-- DROP TABLE User;