import { Injectable } from "@angular/core";

@Injectable({
    providedIn: `root`
})

export class LoggerService{
    message= "custom logger service "

    logMessage = (message:string) => {
        console.log(`logger service:${message}`);
        
    }
}