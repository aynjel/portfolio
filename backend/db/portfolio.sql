CREATE TABLE `users` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`username` varchar(200) NOT NULL UNIQUE,
	`password` varchar(200) NOT NULL,
	`nickname` varchar(200) NOT NULL,
	`email` varchar(200) NOT NULL UNIQUE,
	PRIMARY KEY (`id`)
);

CREATE TABLE `profile` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`user_id` INT NOT NULL,
	`first_name` varchar(200) NOT NULL,
	`middle_name` varchar(200) NOT NULL,
	`last_name` varchar(200) NOT NULL,
	`position` varchar(200) NOT NULL,
	`bio` TEXT,
	`image` TEXT NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `contacts` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`user_id` INT NOT NULL,
	`contact_number` INT NOT NULL,
	`zip_code` INT NOT NULL,
	`street` varchar(200) NOT NULL,
	`city` varchar(200) NOT NULL,
	`province` varchar(200) NOT NULL,
	`country` varchar(200) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `skills` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`user_id` INT NOT NULL,
	`name` varchar(200) NOT NULL,
	`description` TEXT,
	`image` TEXT,
	PRIMARY KEY (`id`)
);

CREATE TABLE `projects` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`user_id` INT NOT NULL,
	`title` varchar(200) NOT NULL,
	`body` TEXT NOT NULL,
	`url` TEXT NOT NULL,
	`image` TEXT,
	PRIMARY KEY (`id`)
);

CREATE TABLE `education` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`user_id` INT NOT NULL,
	`school_name` varchar(200) NOT NULL,
	`school_year` varchar(200) NOT NULL,
	`school_location` varchar(200) NOT NULL,
	`school_image` TEXT,
	PRIMARY KEY (`id`)
);

CREATE TABLE `work_experiences` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`user_id` INT NOT NULL,
	`job_title` varchar(200) NOT NULL,
	`job_position` varchar(200) NOT NULL,
	`job_description` TEXT NOT NULL,
	`date_from` DATE NOT NULL,
	`date_to` DATE NOT NULL,
	`image` TEXT,
	PRIMARY KEY (`id`)
);

CREATE TABLE `hobbies` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`user_id` INT NOT NULL,
	`name` varchar(200) NOT NULL UNIQUE,
	PRIMARY KEY (`id`)
);

CREATE TABLE `talents` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`user_id` INT NOT NULL,
	`name` varchar(200) NOT NULL UNIQUE,
	`rate` INT NOT NULL DEFAULT '0',
	PRIMARY KEY (`id`)
);

CREATE TABLE `achievements` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`user_id` INT NOT NULL,
	`name` varchar(200) NOT NULL UNIQUE,
	`date` DATE,
	`description` TEXT,
	`image` TEXT,
	PRIMARY KEY (`id`)
);

ALTER TABLE `profile` ADD CONSTRAINT `profile_fk0` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`);

ALTER TABLE `contacts` ADD CONSTRAINT `contacts_fk0` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`);

ALTER TABLE `skills` ADD CONSTRAINT `skills_fk0` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`);

ALTER TABLE `projects` ADD CONSTRAINT `projects_fk0` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`);

ALTER TABLE `education` ADD CONSTRAINT `education_fk0` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`);

ALTER TABLE `work_experiences` ADD CONSTRAINT `work_experiences_fk0` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`);

ALTER TABLE `hobbies` ADD CONSTRAINT `hobbies_fk0` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`);

ALTER TABLE `talents` ADD CONSTRAINT `talents_fk0` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`);

ALTER TABLE `achievements` ADD CONSTRAINT `achievements_fk0` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`);











