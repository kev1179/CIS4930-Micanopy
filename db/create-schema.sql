CREATE TABLE gallery_entry (
    ID BIGINT PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL,
    Title VARCHAR(255) NOT NULL,
    Year VARCHAR(5) NULL, 
    Description TEXT,
    Photos TEXT
);

CREATE TABLE pending(
    ID BIGINT PRIMARY KEY,
    FOREIGN KEY (ID) REFERENCES gallery_entry(ID) ON DELETE CASCADE
);

CREATE TABLE accepted(
    ID BIGINT PRIMARY KEY,
    FOREIGN KEY (ID) REFERENCES gallery_entry(ID) ON DELETE CASCADE
);

CREATE TABLE admin(
    userid BIGINT PRIMARY KEY,
    username VARCHAR(45) NOT NULL,
    date_created BIGINT NOT NULL,
    hashed_password BLOB NOT NULL,
    salt BLOB NOT NULL
);

CREATE TABLE operations(
    userid BIGINT,
    Kind VARCHAR(20),
    Timestamp BIGINT,
    PRIMARY KEY (userid, Timestamp, Kind),
    FOREIGN KEY (userid) REFERENCES admin(userid)
);