"use client";

import { Heart, MessageSquare, Repeat, Send } from "lucide-react";
import { useEffect, useState } from "react";

const Posts = [
  {
    id: 1,
    content: "the secret to consistently coding is having no friends",
    likes: 15,
    author: "Anonymous"
  },
  {
    id: 2,
    content: "How is the relationship between developers and PMs in your team?",
    likes: 10,
    author: "Aadesh"
  },
  {
    id: 3,
    content: "People are strange, they neither wish to live nor die.",
    likes: 5,
    author: "Rahul"
  },
  {
    id: 4,
    content: "Python or Javascript in the backend?",
    likes: 9,
    author: "Narendra"
  },
  {
    id: 5,
    content: "I'd rather code 4 hours 7 days a week than work 8 hours 5 days a week",
    likes: 50,
    author: "Nitin"
  },
  {
    id: 6,
    content: "the secret to consistently coding is having no friends",
    likes: 15,
    author: "Amit"
  },
  {
    id: 7,
    content: "How is the relationship between developers and PMs in your team?",
    likes: 10,
    author: "Sonia"
  },
  {
    id: 8,
    content: "People are strange, they neither wish to live nor die.",
    likes: 5,
    author: "Jyotiraditya"
  },
  {
    id: 9,
    content: "Python or Javascript in the backend?",
    likes: 9,
    author: "Awadhesh"
  },
  {
    id: 10,
    content: "I'd rather code 4 hours 7 days a week than work 8 hours 5 days a week",
    likes: 50,
    author: "Nitish"
  },
  {
    id: 11,
    content: "the secret to consistently coding is having no friends",
    likes: 15,
    author: "Prashant"
  },
  {
    id: 12,
    content: "How is the relationship between developers and PMs in your team?",
    likes: 10,
    author: "Anonymous"
  },
  {
    id: 13,
    content: "People are strange, they neither wish to live nor die.",
    likes: 5,
    author: "Anonymous"
  },
  {
    id: 14,
    content: "Python or Javascript in the backend?",
    likes: 9,
    author: "Anonymous"
  },
  {
    id: 15,
    content: "I'd rather code 4 hours 7 days a week than work 8 hours 5 days a week",
    likes: 50,
    author: "Anonymous"
  },
];

const Home = () => {
  const [posts, setPosts] = useState(Posts)
  useEffect(()=>{
    async function fetchPosts(){
      const response = await fetch("/api/post");
      const data = await response.json();
      // setPosts(data.data); temporarily disabling this
    }
    fetchPosts();
  },[])
  return (
    <div className="md:px-[500px] flex flex-col gap-8 p-4">
      {posts.map((post) => (
        <div
          key={post.id}
          className="grid grid-cols-12 gap-4 border border-gray-100 items-center rounded-md p-2"
        >
          <div className="w-10 h-10 p-2 col-span-12 md:col-span-1 border border-gray-200 rounded-full"></div>
          <div className="col-span-12 md:col-span-11">
            <div className="font-bold">{post.author}</div>
            <div className="py-2">{post.content}</div>
            <div className="flex gap-4 pt-2">
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5" />
                20
              </div>
              <div className="flex items-center gap-2 py-2">
                <MessageSquare className="w-5 h-5" /> 5
              </div>
              <div className="flex items-center gap-2 py-2">
                <Repeat className="w-5 h-5" /> 2
              </div>
              <div className="flex items-center gap-2 py-2">
                <Send className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
