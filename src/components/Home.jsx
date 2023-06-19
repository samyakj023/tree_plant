import Cover from "./Cover";
import Slider from "./Slider";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";

function Home() {
  return (
    <div className="Home">
      <Cover imageSrc={img1} />
      <Slider
        imageSrc={img2}
        title={"About Us."}
        subtitle={
          "Welcome to our tree charity website! . Our mission is to create a healthy environment."
        }
      />
      <Slider
        imageSrc={img3}
        title={"How will my donation help?."}
        subtitle={
          "your donation will help to plant a tree and maintaining it."
        }
        flipped={true}
      />
    </div>
  );
}

export default Home;
