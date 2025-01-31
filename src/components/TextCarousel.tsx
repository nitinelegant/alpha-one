"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

interface TextCarouselProps {
  text: string;
  characterLimit: number;
}

const splitTextIntoChunks = (text: string, limit: number): string[] => {
  const words = text.split(" ");
  const chunks: string[] = [];
  let currentChunk = "";

  words.forEach((word) => {
    if ((currentChunk + " " + word).length <= limit) {
      currentChunk += (currentChunk ? " " : "") + word;
    } else {
      if (currentChunk) chunks.push(currentChunk);
      currentChunk = word;
    }
  });

  if (currentChunk) chunks.push(currentChunk);

  return chunks;
};

export default function TextCarousel({
  text,
  characterLimit,
}: TextCarouselProps) {
  const textChunks = splitTextIntoChunks(text, characterLimit);

  return (
    <Carousel className="w-full max-w-xs mx-auto mt-4">
      <CarouselContent>
        {textChunks.map((chunk, index) => (
          <CarouselItem key={index}>
            <Card>
              <CardContent className="flex  p-2 h-[100px]">
                <p className="text-gray-300 text-lg font-funnel">{chunk}</p>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
