"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface StackedSliderProps {
  images: string[];
  className?: string;
}

export function StackedSlider({ images, className }: StackedSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className={cn("relative", className)}>
      <div className="relative aspect-4/5 rounded-2xl">
        {images.map((image, index) => {
          const position =
            (index - currentIndex + images.length) % images.length;
          const isVisible = position < 3;

          return (
            <div
              key={index}
              className={cn(
                "absolute inset-0 rounded-2xl overflow-hidden transition-all duration-500 ease-out",
                !isVisible && "opacity-0 pointer-events-none"
              )}
              style={{
                transform: `
                  translateY(${position * 12}px) 
                  translateX(${position * 8}px) 
                  scale(${1 - position * 0.05})
                  rotateZ(${position * 2}deg)
                `,
                zIndex: images.length - position,
                boxShadow:
                  position === 0
                    ? "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
                    : "0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)",
              }}
            >
              <div
                className="absolute inset-0 bg-center bg-cover"
                style={{
                  backgroundImage: `url('${image}')`,
                }}
              />
              {position > 0 && <div className="absolute inset-0 bg-white/10" />}
            </div>
          );
        })}
      </div>

      {/* Navigation Controls */}
      <div className="absolute z-50 flex bottom-4 right-4 gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={prevSlide}
          className="shadow-lg bg-white/90 backdrop-blur-sm hover:bg-white"
          type="button"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={nextSlide}
          className="shadow-lg bg-white/90 backdrop-blur-sm hover:bg-white"
          type="button"
          aria-label="Next image"
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute z-50 flex bottom-4 left-1/2 -translate-x-1/2 gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              index === currentIndex
                ? "bg-white w-6"
                : "bg-white/50 hover:bg-white/75"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
