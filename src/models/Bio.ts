import { AutoMap } from "@automapper/classes";
import { Job } from "./Job";

export class Bio {
    @AutoMap(() => Job)
    job!: Job;
  
    @AutoMap()
    birthday!: Date;
  
    @AutoMap()
    avatarUrl!: string;
  }