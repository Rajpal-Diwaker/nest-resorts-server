import { IsNotEmpty } from "class-validator";

export class CreateTerritoryDto {
    @IsNotEmpty() name: string;
}
