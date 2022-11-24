import { AutoMap } from "@automapper/classes";
import { BioDto } from "./BioDto";

export class UserDto {
    @AutoMap()
    firstName!: string;
  
    @AutoMap()
    lastName!: string;
  
    @AutoMap()
    fullName!: string;
  
    @AutoMap()
    username!: string;
  
    @AutoMap(() => BioDto)
    bio!: BioDto;
  }