"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";

const CreatePost = () => {
  const session = useSession();
  const [postData, setPostData] = useState({
    content: "",
    postAs: "Anonymous",
    region: "",
  });

  async function createPost() {
    const response = await fetch("/api/post", {
      method: "POST",
      body: JSON.stringify(postData),
    });
    const data = await response.json();
    console.log(data);
  }
  return (
    <Dialog>
      <DialogTrigger>
        <Button>Create post</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New Post</DialogTitle>
          <DialogDescription className="flex flex-col gap-4 items-center">
            <Textarea
              rows={10}
              onChange={(e) => setPostData((old) => ({ ...old, content: e.target.value }))}
            />
            <div className="grid grid-cols-12 gap-4">
              <Select onValueChange={(value) => setPostData((old) => ({ ...old, region: value }))}>
                <SelectTrigger className="col-span-4">
                  <SelectValue placeholder="Select region" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="national">National</SelectItem>
                  <SelectItem value="maharashtra">Maharashtra</SelectItem>
                  <SelectItem value="gujarat">Gujarat</SelectItem>
                  <SelectItem value="madhyapradesh">Madhya pradesh</SelectItem>
                </SelectContent>
              </Select>
              <Select onValueChange={(value) => setPostData((old) => ({ ...old, postAs: value }))}>
                <SelectTrigger className="col-span-4">
                  <SelectValue placeholder="Post as" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={session.data?.user?.name || "Anonymous"}>
                    {session.data?.user?.name}
                  </SelectItem>
                  <SelectItem value="Anonymous">Anonymous</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="default" className="col-span-4" onClick={createPost}>
                Create post
              </Button>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CreatePost;
