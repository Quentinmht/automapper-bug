import { AutoMap } from "@automapper/classes";

export class BioDto {
    @AutoMap()
    jobTitle!: string;
  
    @AutoMap()
    jobSalary!: number;
  
    @AutoMap()
    birthday!: string;
  
    @AutoMap()
    avatarUrl!: string;
  }