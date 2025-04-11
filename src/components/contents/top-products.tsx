import { Card, CardHeader, CardFooter } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Image from "next/image";
import product1 from "./images/product1.jpg";
import product2 from "./images/product2.jpg";
import product3 from "./images/product3.jpg";

export default function TopProducts() {
  const products = [
    {
      src: product1,
      name: "Hair Product",
    },
    {
      src: product2,
      name: "Shoe Product",
    },
    {
      src: product3,
      name: "Gadget Product",
    },
  ];

  return (
    <section className="space-y-8 bg-secondary rounded-2xl p-6 pb-10">
      <h1 className="text-4xl text-center font-bold">Top Products</h1>
      <Carousel
        className="w-full max-w-svw"
        opts={{
          align: "start",
          skipSnaps: true,
        }}
      >
        <CarouselContent className="">
          {products.map((product, i) => (
            <CarouselItem className="flex-none" key={i}>
              <Card className="w-72">
                <CardHeader>
                  <Image
                    src={product.src}
                    alt="Product alt"
                    className="aspect-square object-cover"
                  />
                </CardHeader>
                <CardFooter>
                  <p className="mx-auto font-bold text-2xl">{product.name}</p>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
          {products.map((product, i) => (
            <CarouselItem className="flex-none" key={i}>
              <Card className="w-72">
                <CardHeader>
                  <Image
                    src={product.src}
                    alt="Product alt"
                    className="aspect-square object-cover"
                  />
                </CardHeader>
                <CardFooter>
                  <p className="mx-auto font-bold text-2xl">{product.name}</p>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
