-- MySQL Script generated by MySQL Workbench
-- Sun Jul 28 15:28:34 2019
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema Surf_desafio
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema Surf_desafio
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Surf_desafio` DEFAULT CHARACTER SET utf8 ;
USE `Surf_desafio` ;

-- -----------------------------------------------------
-- Table `Surf_desafio`.`Surfista`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Surf_desafio`.`Surfista` (
  `numero` INT(15) NOT NULL,
  `nome` VARCHAR(45) NULL,
  `pais` VARCHAR(45) NULL,
  PRIMARY KEY (`numero`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Surf_desafio`.`Bateria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Surf_desafio`.`Bateria` (
  `id` INT(15) NOT NULL AUTO_INCREMENT,
  `Surfista_numero` INT(15) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Bateria_Surfista_idx` (`Surfista_numero` ASC) VISIBLE,
  CONSTRAINT `fk_Bateria_Surfista`
    FOREIGN KEY (`Surfista_numero`)
    REFERENCES `Surf_desafio`.`Surfista` (`numero`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Surf_desafio`.`Onda`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Surf_desafio`.`Onda` (
  `id` INT(15) NOT NULL AUTO_INCREMENT,
  `Sufista_numero` INT(15) NOT NULL,
  `Bateria_id` INT(15) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Surfista_Bateria_Onda_idx` (`Sufista_numero` ASC) VISIBLE,
  INDEX `fk_Onda_Bateria1_idx` (`Bateria_id` ASC) VISIBLE,
  CONSTRAINT `fk_Surfista_Bateria_Onda`
    FOREIGN KEY (`Sufista_numero`)
    REFERENCES `Surf_desafio`.`Bateria` (`Surfista_numero`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Onda_Bateria1`
    FOREIGN KEY (`Bateria_id`)
    REFERENCES `Surf_desafio`.`Bateria` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Surf_desafio`.`Nota`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Surf_desafio`.`Nota` (
  `id` INT(15) NOT NULL AUTO_INCREMENT,
  `Onda_id` INT(15) NOT NULL,
  `notaparcial1` DECIMAL(30) NULL,
  `notaparcial2` DECIMAL(30) NULL,
  `notaparcial3` DECIMAL(30) NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Nota_Onda1_idx` (`Onda_id` ASC) VISIBLE,
  CONSTRAINT `fk_Nota_Onda1`
    FOREIGN KEY (`Onda_id`)
    REFERENCES `Surf_desafio`.`Onda` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
