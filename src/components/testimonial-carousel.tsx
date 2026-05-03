"use client";

import * as ScrollArea from "@radix-ui/react-scroll-area";

type Testimonial = {
  quote: string;
  author: string;
};

export function TestimonialCarousel({ items }: { items: Testimonial[] }) {
  return (
    <ScrollArea.Root className="testimonialScrollArea" type="always">
      <ScrollArea.Viewport className="testimonialViewport">
        <div className="testimonialTrack">
          {items.map((item) => (
            <blockquote key={item.author} className="testimonialCard">
              <p>“{item.quote}”</p>
              <footer>{item.author}</footer>
            </blockquote>
          ))}
        </div>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar className="scrollAreaScrollbar testimonialScrollbar" orientation="horizontal">
        <ScrollArea.Thumb className="scrollAreaThumb" />
      </ScrollArea.Scrollbar>
    </ScrollArea.Root>
  );
}
