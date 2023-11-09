"use strict";
{
    const getMiterPerSecond = (params) => {
        if (typeof params === "number") {
            const convertedSpeed = (params * 1000) / 3600;
            console.log("Converted speed is ", convertedSpeed, " km/s");
        }
        else if (typeof params === "string") {
            const [number, string] = params.split(" ");
            const convertedSpeed = (parseFloat(number) * 1000) / 3600;
            console.log("Converted speed is ", convertedSpeed, " km/s");
        }
        else {
            console.log("input is invalid");
        }
    };
    getMiterPerSecond(120);
}
