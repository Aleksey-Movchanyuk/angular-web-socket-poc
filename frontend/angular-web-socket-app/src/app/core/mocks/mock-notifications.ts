import { Notification } from '../../shared/models/notification';

export const NOTIFICATIONS: Notification[] = [
    { id: 11, date: new Date("2021-05-24"), type: "message", title: "Data loaded", description: "Data from file 123.csv successfuly loaded" },
    { id: 12, date: new Date("2021-05-25"), type: "alert", title: "Server overloaded", description: "Traffic reached 5M" },
    { id: 13, date: new Date("2021-05-26"), type: "message", title: "Calculation is finished", description: "Forecast data calculated successfully" },
  ];