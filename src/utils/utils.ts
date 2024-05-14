import html2canvas from "html2canvas";
import {User} from "../types.ts";
import React from "react";
import {dateRegex, listOfCourses, listOfLocations} from "../constants.ts";

export const handlePrint = async (userData: User, printRef: React.RefObject<HTMLDivElement>) => {
  const element = printRef!.current;
  const canvas = await html2canvas(element!, {
    useCORS: true,
    scale: 4,
    backgroundColor: "transparent"
  });

  const data = canvas.toDataURL("image/png");
  const link = document.createElement("a");

  link.href = data;
  link.download = `${userData!.fullName}.png`;

  document.body.appendChild(link);
  const style = document.createElement("style");
  style.sheet?.insertRule(
    "body > div:last-child img { display: inline-block; }"
  );
  link.click();
  document.body.removeChild(link);
};


export const isDisabled = (date: string, name: string, location: string) => {
  const dateValid = (dateRegex).test(date);
  const nameValid = [...listOfCourses.filter(element => element.name === name)]
  const locationValid = [...listOfLocations.filter(element => element.name === location)];
  console.log(dateValid, nameValid, locationValid);
  return !dateValid && nameValid.length === 0 && locationValid.length === 0
}
