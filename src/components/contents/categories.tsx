import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import apparel from "./images/apparel.jpg";
import gadget from "./images/gadget.jpg";
import personal from "./images/personal-care.jpg";
import Link from "next/link";

export default function Categories() {
  const categories = [
    {
      categoryImg: apparel,
      categoryName: "Apparel",
      categoryURL: "/category/apparel",
    },
    {
      categoryImg: gadget,
      categoryName: "Electronics",
      categoryURL: "/category/electronics",
    },
    {
      categoryImg: personal,
      categoryName: "Personal Care",
      categoryURL: "/category/personal-care",
    },
  ];

  return (
    <section className="space-y-8 bg-secondary rounded-2xl p-6 pb-10">
      <h1 className="text-4xl text-center font-bold">Categories</h1>
      <div className="flex gap-4 justify-around">
        {categories.map((category) => (
          <Link href={category.categoryURL} key={category.categoryName}>
            <Card className="w-72">
              <CardHeader>
                <Image
                  src={category.categoryImg}
                  alt="Category alt"
                  className="aspect-square object-cover"
                />
              </CardHeader>
              <CardFooter>
                <p className="mx-auto font-bold text-2xl">
                  {category.categoryName}
                </p>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
