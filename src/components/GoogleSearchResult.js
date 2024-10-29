"use client"
import * as React from "react"
import Image from "next/image"
import { Search, Mic, Camera, Settings, Grid, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import DiwaliDoodle from "./DiwaliDoodle"

export default function Component() {
  const [isVisible, setIsVisible] = React.useState(false);

  const Images = [
    '/1.webp',
    '/2.jpg',
    '/3.jpg',
    '/4.png',
    '/6.png',
    '/8.png',
  ]
  const topics = [
    { title: 'Christmas', image: '/1.jpg' },
    { title: 'Rangoli Designs', image: '/r.jpg' },
    { title: 'Music', image: '/m.jpg' },
    { title: 'Fun Activities', image: '/s.jpg' },
    { title: 'Traditional Food', image: '/ee,jpg.jpg' },
    { title: 'Religious Rituals', image: '/rr.jpg' },
  ];
  return (
    <>
      <DiwaliDoodle isVisible={isVisible} setIsVisible={setIsVisible} />
      <div className="min-h-screen bg-background text-foreground p-4">
        <header className="mb-6">
          <div className="flex items-center justify-between mb-6">
            <Image src="/google.png" alt="Google Logo" width={92} height={30} />
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Grid className="h-5 w-5" />
              </Button>
              <Avatar>
                <AvatarImage src="/placeholder.svg" alt="User" />
                <AvatarFallback>R</AvatarFallback>
              </Avatar>
            </div>
          </div>
          <div className="relative">
            <Input
              type="text"
              defaultValue="diwali"
              className="w-full pr-24"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-3">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Mic className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Camera className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </header>

        <Tabs defaultValue="all" className="mb-6">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="images">Images</TabsTrigger>
            <TabsTrigger value="news">News</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
            <TabsTrigger value="shopping">Shopping</TabsTrigger>
            <TabsTrigger value="more">More</TabsTrigger>
          </TabsList>
        </Tabs>

        <main>
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center">
                    <span onClick={() => setIsVisible(!isVisible)} className="text-2xl">
                      <Image src={'/diya.gif'} alt="gif" width={50} height={50} />
                    </span>
                  </div>
                </div>
                <div>
                  <h1 className="text-2xl font-normal -mb-1">Diwali</h1>
                  <p className="text-muted-foreground mb-2 text-sm">Festival</p>
                  <div className="mb-4">
                    <h2 className="text-lg font-normal mb-1">Date</h2>
                    <p className="text-2xl mb-1">Tue, 29 Oct, 2024 – Sun, 3 Nov, 2024</p>
                    <p className="text-muted-foreground">Public holiday: Thu, 31 Oct, 2024</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <section className="mb-8">
            <h2 className="text-lg font-normal mb-4">Diwali related topics</h2>
            <div className="flex space-x-4 overflow-x-auto pb-4">
              {topics.map((topic, index) => (
                <Card key={index} className="flex-shrink-0 w-24">
                  <CardContent className="p-2 text-center">
                    <div className="w-16 h-16 bg-muted flex items-center justify-center rounded-full overflow-hidden mx-auto mb-2">
                      <Image src={topic.image} width={100} height={100} alt="4" className="mix-blend-multiply object-cover"/>
                    </div>
                    <p className="text-xs">{topic.title}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-8">
            <div className="grid grid-cols-[repeat(auto-fill,minmax(400px,1fr))] gap-4">
              {Images?.map((val, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-0">
                    <Image
                      src={val}
                      alt={`Diwali celebration ${index + 1}`}
                      width={300}
                      height={150}
                      className="w-full h-[300px] "
                    />
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button variant="link" className="mt-4 p-0">
              More images
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </section>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-normal mb-2">About</h2>
              <p className="text-muted-foreground">
                Diwali, also called Deepavali, is the Hindu festival of lights, with variations celebrated in other Indian religions. It symbolizes the spiritual victory of light over darkness, good over evil, and knowledge over ignorance.
              </p>
            </CardContent>
          </Card>
        </main>
      </div>
    </>
  )
}