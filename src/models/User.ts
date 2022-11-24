import { AutoMap } from "@automapper/classes";
import { Bio } from "./Bio";

export class User {
    @AutoMap()
    firstName!: string;
  
    @AutoMap()
    lastName!: string;
  
    @AutoMap()
    username!: string;
  
    password!: string; // <- we purposely left this one out because we don't want to map "password"
  
    @AutoMap(() => Bio)
    bio!: Bio;
  }