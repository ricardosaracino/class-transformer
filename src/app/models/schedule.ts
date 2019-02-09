import {Type} from "class-transformer";
import {Location} from "./location";

export class Schedule {
  id: string;
  shiftStart: string;
  shiftEnd: string;
  actualStart: string;
  actualEnd: string;
  actualHoursApproved: boolean;


  @Type(() => Location)
  location: Location;
}
