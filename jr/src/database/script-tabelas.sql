CREATE DATABASE IF NOT EXISTS spider_man;
USE spider_man;

CREATE TABLE tb_character (
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
    name VARCHAR(30) NOT NULL, 
    fk_character INT NULL,
    FOREIGN KEY (fk_character) REFERENCES tb_character(id)
);

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
    FOREIGN KEY (fk_character) REFERENCES tb_character(id),
    fk_outfit INT NULL,
    FOREIGN KEY (fk_outfit) REFERENCES tb_outfit(id)
);

SELECT * FROM tb_user;
SELECT * FROM tb_outfit;
SELECT * FROM tb_character;

INSERT INTO tb_character VALUES 
(null, "Rhino", "https://game-assets.snap.fan/processed_source_images/Baked/Cards/Rhino_05%2FRhino_05_Foreground.webp?v11",
150, 70, 90, false),
(null, "Abutre", "https://game-assets.snap.fan/processed_source_images/Baked/Cards/Vulture%2FVulture_Foreground.webp?v11",
90, 60, 30, false),
(null, "Escorpião", "https://game-assets.snap.fan/processed_source_images/Baked/Cards/Scorpion%2FScorpion_Foreground.webp?v11",
120, 70, 50, false),
(null, "Electro", "https://game-assets.snap.fan/processed_source_images/Baked/Cards/Electro%2FElectro_Foreground.webp?v11",
100, 70, 40, false),
(null, "Shocker", "https://game-assets.snap.fan/processed_source_images/Baked/Cards/Shocker%2FShocker_Foreground.webp?v11",
110, 60, 40, false),
(null, "Mysterio", "https://game-assets.snap.fan/processed_source_images/Baked/Cards/Mysterio%2FMysterio_Foreground.webp?v11",
80, 50, 90, false),
(null, "Lagarto", "https://game-assets.snap.fan/processed_source_images/Baked/Cards/Lizard%2FLizard_Foreground.webp?v11",
130, 90, 80, false),
(null, "Duende Verde", "https://game-assets.snap.fan/processed_source_images/Baked/Cards/GreenGoblin%2FGreenGoblin_Foreground.webp?v11",
130, 80, 80, false),
(null, "Duende Macabro", "https://game-assets.snap.fan/processed_source_images/Baked/Cards/Hobgoblin%2FHobgoblin_Foreground.webp?v11",
120, 70, 90, false),
(null, "Venom", "https://game-assets.snap.fan/processed_source_images/Baked/Cards/Venom%2FVenom_Foreground.webp?v11",
130, 100, 100, false),
(null, "Carnificina", "https://game-assets.snap.fan/processed_source_images/Baked/Cards/Carnage%2FCarnage_Foreground.webp?v11",
120, 110, 110, false),
(null, "Sabre de Prata", "https://game-assets.snap.fan/processed_source_images/Baked/Cards/SilverSable%2FSilverSable_Foreground.webp?v11",
70, 40, 60, false),
(null, "Rei do Crime", "https://game-assets.snap.fan/processed_source_images/Baked/Cards/Kingpin%2FKingpin_Foreground.webp?v11",
60, 70, 80, false),
(null, "Cabeça de Martelo", "https://static.wikia.nocookie.net/character-level/images/f/f5/Hammerhead_MC_TR.png/revision/latest?cb=20191123210904",
90, 80, 80, false),
(null, "Gata Negra", "https://game-assets.snap.fan/processed_source_images/Baked/Cards/BlackCat%2FBlackCat_Foreground.webp?v11",
60, 40, 70, false),
(null, "Morbius", "https://game-assets.snap.fan/processed_source_images/Baked/Cards/Morbius%2FMorbius_Foreground.webp?v11",
110, 80, 100, false),
(null, "Morlun", "https://static.wikia.nocookie.net/vsbattles/images/2/24/Morlun_MC.png/revision/latest?cb=20190513104833",
100, 80, 90, false),
(null, "Kraven", "https://game-assets.snap.fan/processed_source_images/Baked/Cards/Kraven%2FKraven_Foreground.webp?v11",
120, 90, 80, false),
(null, "Doutor Octopus", "https://game-assets.snap.fan/processed_source_images/Baked/Cards/DoctorOctopus%2FDoctorOctopus_Foreground.webp?v11",
130, 120, 90, false),
(null, "Senhor Negativo", "https://game-assets.snap.fan/processed_source_images/Baked/Cards/MrNegative%2FMrNegative_Foreground.webp?v11",
90, 80, 60, false),
(null, "Homem Areia", "https://game-assets.snap.fan/processed_source_images/Baked/Cards/Sandman%2FSandman_Foreground.webp?v11",
120, 80, 120, false);

DROP DATABASE spider_man;