CREATE TABLE `shopping`.`items`(
    `id_items` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,
    `quantity` VARCHAR(45) NOT NULL,
    `purchased` TINYINT(1) NULL,
    PRIMARY KEY(`id_item`);
)