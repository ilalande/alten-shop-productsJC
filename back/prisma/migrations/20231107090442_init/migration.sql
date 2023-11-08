-- CreateTable
CREATE TABLE `Product` (
    `id` VARCHAR(191) NOT NULL,
    `code` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NULL,
    `price` DOUBLE NOT NULL,
    `category` ENUM('ACESSORIES', 'CLOTHING', 'FITNESS', 'ELECTRONICS') NOT NULL,
    `quantity` INTEGER NOT NULL,
    `inventoryStatus` ENUM('INSTOCK', 'LOWSTOCK', 'OUTOFSTOCK') NOT NULL,
    `rating` INTEGER NOT NULL,

    UNIQUE INDEX `Product_code_key`(`code`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
