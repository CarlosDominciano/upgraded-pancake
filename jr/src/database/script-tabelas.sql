CREATE DATABASE IF NOT EXISTS spidtb_userer_man;
USE spider_man;

CREATE TABLE tb_user (
	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(60) NOT NULL,
    email VARCHAR(70) NOT NULL,
    password VARCHAR(40) NOT NULL,
    game_victorys INT NULL,
    game_defeats INT NULL,
    game_draws INT NULL,
    game_points INT NULL,
    fk_character INT NULL,
    FOREIGN KEY (fk_character) REFERENCES tb_characters(id),
    fk_outfit INT NULL,
    FOREIGN KEY (fk_outfit) REFERENCES tb_outfit(id)
);

CREATE TABLE tb_characters (
	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(30) NOT NULL,
    url_image VARCHAR(255) NOT NULL,
    hit_points INT NOT NULL,
    attack INT NOT NULL,
    defense INT NOT NULL,
    hero BOOLEAN NOT NULL
);

CREATE TABLE tb_outfit (
	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(30) NOT NULL 
);
