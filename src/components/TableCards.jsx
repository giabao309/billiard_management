import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import TableImage from "@/assets/table.png";

export default function CardWithForm() {
  return (
    <Card
      className=" bg-no-repeat bg-cover w-[10rem] h-[7.5rem] border-none flex items-center justify-center"
      style={{ backgroundImage: `url(${TableImage})` }}
    >
      <CardHeader>
        <CardTitle>Bàn 1</CardTitle>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  );
}
