import age_cal from "../../Images/age_cal.png";
import Navbar from "./Navbar";
import Card from "./Card";

const Home = () => {
  const projects = [
    {
      name: "age_calculator",
      description:
        "Want to know exactly how old you are? This tool lets you calculate your age in seconds, with zero effort!",
      image: age_cal,
      starting_date: "17/06/25",
    },
    {
      name: "age_calculator",
      description: "You can easily find out your age by using it.",
      image: age_cal,
      starting_date: "17/06/25",
    },
    {
      name: "age_calculator",
      description:
        "You can easily find out youj jk  yyy  yhjy yyky tjrt jytkyky k6r age by using it.",
      image: age_cal,
      starting_date: "17/06/25",
    },
    {
      name: "age_calculator",
      description: "You can easily find out your age by using it.",
      image: age_cal,
      starting_date: "17/06/25",
    },
    {
      name: "age_calculator",
      description: "You can easily find out your age by using it.",
      image: age_cal,
      starting_date: "17/06/25",
    },
    {
      name: "age_calculator",
      description: "You can easily find out your age by using it.",
      image: age_cal,
      starting_date: "17/06/25",
    },
    {
      name: "age_calcullluuyyul lu lulu lulul ul uylul yuuk uk uykukuk uhkyk h ykh kyj yjator",
      description:
        "You can easily find out your age by using it. yul lu lulu lulul ul uylul yuuk uk uykukuk uhkyk h ykh kyj yjator",
      image: age_cal,
      starting_date: "17/06/25",
    },
  ];

  return (
    <>
      <Navbar></Navbar>
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl my-3 text-center font-bold text-gray-600 dark:text-white">
        Enjoy using all the applications
      </h1>
      <div className="flex flex-wrap justify-center gap-6 p-6">
        {projects.map((item, index) => (
          <Card key={index} item={item}></Card>
        ))}
      </div>
    </>
  );
};

export default Home;
