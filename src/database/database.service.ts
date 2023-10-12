import { PrismaClient } from "@prisma/client";
import { Injectable } from "@nestjs/common";

export default class DatabaseService {
    private static prisma: PrismaClient;

    public static getInstance(): PrismaClient {
        if (!this.prisma) {
            this.prisma = new PrismaClient();
        }

        return this.prisma;
    }
}
