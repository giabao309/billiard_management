import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TableTabs from "@/components/TableTabs";
import TableCards from "@/components/TableCards";

export default function ManageService() {
  return (
    <div>
      <Tabs defaultValue="table" className="w-3/5 p-4 rounded-sm border-">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="table">Bàn</TabsTrigger>
          <TabsTrigger value="menu">Thực đơn</TabsTrigger>
        </TabsList>
        <TabsContent value="table">
          <TableTabs />
          <TableCards />
        </TabsContent>
        <TabsContent value="menu">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Change your password here. After saving, you'll be logged out.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Current password</Label>
                <Input id="current" type="password" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">New password</Label>
                <Input id="new" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
