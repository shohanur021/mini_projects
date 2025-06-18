import age_cal from "../../Images/age_cal.png";
import Navbar from "./Navbar";
import Card from "./Card";
import Age_calculator from "../Age_calculator/Age_calculator";

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
      <Age_calculator></Age_calculator>
      {/* <Navbar></Navbar>
      <div className="flex flex-wrap justify-center gap-6 p-6">
        {projects.map((item) => (
          <Card item={item}></Card>
        ))}
      </div> */}
    </>
  );
};

export default Home;
