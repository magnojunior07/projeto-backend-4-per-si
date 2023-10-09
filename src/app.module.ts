import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import DatabaseService from "./database/database.service";

@Module({
    imports: [DatabaseService],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
