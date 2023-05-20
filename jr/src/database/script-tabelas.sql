CREATE DATABASE IF NOT EXISTS spider_man;
USE spider_man;

CREATE TABLE tb_characters (
	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(30) NOT NULL,
    url_image VARCHAR(255) NOT NULL,
    hit_points INT NOT NULL,
    attack INT NOT NULL,
    defense INT NOT NULL,
    hero BOOLEAN NOT NULL
);

CREATE TABLE tb_outfits (
	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(30) NOT NULL, 
    fk_character INT NULL,
    FOREIGN KEY (fk_character) REFERENCES tb_character(id)
);

CREATE TABLE tb_users (
	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(60) NOT NULL,
    email VARCHAR(70) NOT NULL,
    password VARCHAR(40) NOT NULL,
    game_victorys INT NULL,
    game_defeats INT NULL,
    game_draws INT NULL,
    game_points INT NULL,
    fk_character INT NULL,
    FOREIGN KEY (fk_character) REFERENCES tb_character(id),
    fk_outfit INT NULL,
    FOREIGN KEY (fk_outfit) REFERENCES tb_outfit(id)
);

CREATE TABLE tb_stages (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(40) NOT NULL,
    url_image VARCHAR(255) NOT NULL
)

SELECT * FROM tb_users;
SELECT * FROM tb_outfits;
SELECT * FROM tb_characters; 
SELECT * FROM tb_stages; 

# Villains
INSERT INTO tb_characters VALUES 
(null, "Rhino", "https://game-assets.snap.fan/processed_source_images/Baked/Cards/Rhino_05%2FRhino_05_Foreground.webp?v11",
150, 70, 90, false),
(null, "Vulture", "https://game-assets.snap.fan/processed_source_images/Baked/Cards/Vulture%2FVulture_Foreground.webp?v11",
90, 60, 30, false),
(null, "Scorpion", "https://game-assets.snap.fan/processed_source_images/Baked/Cards/Scorpion%2FScorpion_Foreground.webp?v11",
120, 70, 50, false),
(null, "Electro", "https://game-assets.snap.fan/processed_source_images/Baked/Cards/Electro%2FElectro_Foreground.webp?v11",
100, 70, 40, false),
(null, "Shocker", "https://game-assets.snap.fan/processed_source_images/Baked/Cards/Shocker%2FShocker_Foreground.webp?v11",
110, 60, 40, false),
(null, "Mysterio", "https://game-assets.snap.fan/processed_source_images/Baked/Cards/Mysterio%2FMysterio_Foreground.webp?v11",
80, 50, 90, false),
(null, "Lizard", "https://game-assets.snap.fan/processed_source_images/Baked/Cards/Lizard%2FLizard_Foreground.webp?v11",
130, 90, 80, false),
(null, "Green Goblin", "https://game-assets.snap.fan/processed_source_images/Baked/Cards/GreenGoblin%2FGreenGoblin_Foreground.webp?v11",
130, 80, 80, false),
(null, "Hob goblin", "https://game-assets.snap.fan/processed_source_images/Baked/Cards/Hobgoblin%2FHobgoblin_Foreground.webp?v11",
120, 70, 90, false),
(null, "Venom", "https://game-assets.snap.fan/processed_source_images/Baked/Cards/Venom%2FVenom_Foreground.webp?v11",
130, 100, 100, false),
(null, "Carnage", "https://game-assets.snap.fan/processed_source_images/Baked/Cards/Carnage%2FCarnage_Foreground.webp?v11",
120, 110, 110, false),
(null, "Silver Sable", "https://game-assets.snap.fan/processed_source_images/Baked/Cards/SilverSable%2FSilverSable_Foreground.webp?v11",
70, 40, 60, false),
(null, "Kingpin", "https://game-assets.snap.fan/processed_source_images/Baked/Cards/Kingpin%2FKingpin_Foreground.webp?v11",
60, 70, 80, false),
(null, "Hammer head", "https://i.pinimg.com/originals/3e/8a/23/3e8a230bdea7a7806c46a0049b748b68.png",
90, 80, 80, false),
(null, "Black cat", "https://game-assets.snap.fan/processed_source_images/Baked/Cards/BlackCat%2FBlackCat_Foreground.webp?v11",
60, 40, 70, false),
(null, "Morbius", "https://game-assets.snap.fan/processed_source_images/Baked/Cards/Morbius%2FMorbius_Foreground.webp?v11",
110, 80, 100, false),
(null, "Morlun", "https://comicvine.gamespot.com/a/uploads/scale_medium/11122/111223989/4781959-morlun1.jpg",
100, 80, 90, false),
(null, "Kraven", "https://game-assets.snap.fan/processed_source_images/Baked/Cards/Kraven%2FKraven_Foreground.webp?v11",
120, 90, 80, false),
(null, "Doctor Octopus", "https://game-assets.snap.fan/processed_source_images/Baked/Cards/DoctorOctopus%2FDoctorOctopus_Foreground.webp?v11",
130, 120, 90, false),
(null, "Mister Negative", "https://game-assets.snap.fan/processed_source_images/Baked/Cards/MrNegative%2FMrNegative_Foreground.webp?v11",
90, 80, 60, false),
(null, "Sandman", "https://game-assets.snap.fan/processed_source_images/Baked/Cards/Sandman%2FSandman_Foreground.webp?v11",
120, 80, 120, false);

# Heroes
INSERT INTO tb_characters VALUES 
(null, "Spiderman 2099", "https://game-assets.snap.fan/processed_source_images/Baked/Cards/SpiderMan2099%2FSpiderMan2099_Foreground.webp?v11",
100, 90, 70, true),
(null, "Spider Gwen", "https://game-assets.snap.fan/processed_source_images/Baked/Cards/GhostSpider%2FGhostSpider_Foreground.webp?v11",
70, 120, 80, true),
(null, "Spiderman", "https://game-assets.snap.fan/processed_source_images/Baked/Cards/SpiderMan_05%2FSpiderMan_05_Foreground.webp?v11",
100, 100, 100, true),
(null, "Spider Ham", "https://game-assets.snap.fan/processed_source_images/Baked/Cards/SpiderHam%2FSpiderHam_Foreground.webp?v11",
60, 40, 150, true),
(null, "Spider Hulk", "https://cdn130.picsart.com/309739969157211.png",
70, 130, 160, true),
(null, "Spider Girl", "https://pm1.narvii.com/6271/920a91338460086351a41d26c1c996c58671a679_00.jpg",
90, 40, 120, true),
(null, "Spiderman Symbiote", "https://game-assets.snap.fan/processed_source_images/Baked/Cards/SpiderMan_02%2FSpiderMan_02_Foreground.webp?v11",
130, 120, 70, true),
(null, "Iron Spider", "https://i.pinimg.com/originals/e0/b6/37/e0b637a9bfa8cc3491dbf7fde854f4ed.png",
80, 60, 200, true),
(null, "Ghost Spider", "https://i.pinimg.com/originals/94/74/5f/94745f417f577f077e8f3d2d69ad7f6d.png",
90, 120, 50, true),
(null, "Miles Morales", "https://game-assets.snap.fan/processed_source_images/Baked/Cards/MilesMorales%2FMilesMorales_Foreground.webp?v11",
70, 50, 190, true),
(null, "Silk", "https://game-assets.snap.fan/processed_source_images/Baked/Cards/Silk_02%2FSilk_02_Foreground.webp?v11",
100, 50, 90, true),
(null, "Superior Spiderman", "https://game-assets.snap.fan/processed_source_images/Baked/Cards/DoctorOctopus_04%2FDoctorOctopus_04_Foreground.webp?v11",
100, 90, 120, true),
(null, "Spiderman Noir", "https://i.pinimg.com/originals/ed/bc/65/edbc651ab9954ff0b899284b429e7c15.png",
70, 50, 90, true),
(null, "Spider Woman", "https://game-assets.snap.fan/processed_source_images/Baked/Cards/SpiderWoman%2FSpiderWoman_Foreground.webp?v11",
90, 50, 120, true);


INSERT INTO tb_outfits VALUES
(null, "God Venom", 10);

INSERT INTO tb_stages VALUES
(null, "Gold Street", "https://fightersgeneration.com/nf9/game/stage/mvc-stage-spidersweb3.gif"),
(null, "Headquarters of Evil", "https://fightersgeneration.com/nf9/game/stage/mvc-stage-headquarters-of-evil.gif"),
(null, "Days of Future Past", "https://www.fightersgeneration.com/nf9/game/stage/mvc-stage-blue-area-of-the-moon.gif"),
(null, "", ""),
(null, "", ""),
(null, "", ""),
(null, "", ""),
(null, "", ""),

INSERT INTO tb_users VALUES
(null, "Carlos Dominciano", "carlos.dominciano@gmail.com", "12345678", null, null, null, null, 10, 1);

#DROP DATABASE spider_man;