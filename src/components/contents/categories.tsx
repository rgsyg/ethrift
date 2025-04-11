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

export default function Categories() {
  const categories = [
    {
      categoryImg: apparel,
      categoryName: "Apparel",
    },
    {
      categoryImg: gadget,
      categoryName: "Electronics",
    },
    {
      categoryImg: personal,
      categoryName: "Health & Personal Care",
    },
  ];

  return (
    <>
      <h1 className="text-4xl text-center font-bold">Categories</h1>
      <section className="flex gap-4 justify-around">
        {categories.map((category) => (
          <Card key={category.categoryName} className="w-72">
            <CardHeader>
              <Image src={category.categoryImg} alt="Category alt" />
            </CardHeader>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        ))}
      </section>
    </>
  );
}
