import age_cal from "../../Images/age_cal.png";
import Navbar from "./Navbar";
import Card from "./Card";
import word_counter from "../../Images/word_counter.jpg";
import weather from "../../Images/weather.jpg";
import color_picker from "../../Images/color_picker.jpg";
import currency_converter from "../../Images/currency_converter.jpg";

const Home = () => {
  const projects = [
    {
      name: "Age Calculator",
      description:
        "Want to know exactly how old you are? This tool lets you calculate your age in seconds, with zero effort!",
      image: age_cal,
      starting_date: "17/06/25",
    },
    {
      name: "Word Counter",
      description:
        "You can easily find out how many words are present in your essay by using a word counter tool.",
      image: word_counter,
      starting_date: "21/06/25",
    },
    {
      name: "Weather Report",
      description:
        "Search for your desired city or town and easily get the latest and most accurate weather details",
      image: weather,
      starting_date: "23/06/25",
    },
    {
      name: "Color Picker",
      description: "Pick any color instantly with ease using our powerful and user-friendly color picker—perfect for designers, developers, and creative minds!",
      image: color_picker,
      starting_date: "24/06/25",
    },
    {
      name: "currency converter",
      description: "You can access real-time currency exchange rates completely free using this application. It converts between various currencies instantly",
      image: currency_converter,
      starting_date: "27/06/25",
    },
    {
      name: "age_calculator",
      description: "You can easily find out your age by using it.",
      image: age_cal,
      starting_date: "17/06/25",
    },
    {
      name: "age_calcullluuyyul lu lulu lulul",
      description:
        "You can easily find out your age by using it. yul lu lulu lulul ul uylul yuuk uk uyk h hjjtjt kk yk k yky k ykyt k ",
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
