import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Video from "../components/Video";

export default function Event() {
  const { slug } = useParams<{ slug: string | any }>()
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">

        <Video lessonSlug={ slug || 'default' }/>
        
        <SideBar />
      </main>

    </div>
  )
} 