"use client";

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
import { BorderBeam } from "./magicui/border-beam";

export function ContactForm() {
  return (
    <Card className="relative w-[350px] overflow-hidden p-5 py-4">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>
          Enter your credentials to access your account.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" type="text" placeholder="Enter your name" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                type="text"
                placeholder="Enter your Subject"
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="description">Description</Label>
              <Input
                id="description"
                type="text"
                placeholder="Enter your Description"
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button>Submit</Button>
      </CardFooter>
      <BorderBeam duration={8} size={100} />
    </Card>
  );
}




// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea"; // Make sure this component exists or create one
// import { BorderBeam } from "./magicui/border-beam";

// export function ContactForm() {
//   return (
//     <Card className="relative w-full max-w-xl overflow-hidden">
//       <CardHeader>
//         <CardTitle>Contact Me</CardTitle>
//         <CardDescription>
//           Feel free to reach out by filling the form below.
//         </CardDescription>
//       </CardHeader>
//       <CardContent>
//         <form className="grid w-full items-center gap-4">
//           {/* Name */}
//           <div className="flex flex-col space-y-1.5">
//             <Label htmlFor="name">Name</Label>
//             <Input id="name" type="text" placeholder="Enter your name" />
//           </div>

//           {/* Email */}
//           <div className="flex flex-col space-y-1.5">
//             <Label htmlFor="email">Email</Label>
//             <Input id="email" type="email" placeholder="Enter your email" />
//           </div>

//           {/* Subject */}
//           <div className="flex flex-col space-y-1.5">
//             <Label htmlFor="subject">Subject</Label>
//             <Input id="subject" type="text" placeholder="Subject of your message" />
//           </div>

//           {/* Description */}
//           <div className="flex flex-col space-y-1.5">
//             <Label htmlFor="description">Description</Label>
//             <Textarea
//               id="description"
//               placeholder="Type your message here..."
//               rows={5}
//             />
//           </div>
//         </form>
//       </CardContent>
//       <CardFooter className="justify-end">
//         <Button type="submit">Submit</Button>
//       </CardFooter>
//       <BorderBeam duration={8} size={100} />
//     </Card>
//   );
// }
