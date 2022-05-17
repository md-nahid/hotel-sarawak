import React from "react";
import Bigimg from "../../Images/bigimg.png";
import increment from "../../Redux/Actions";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";

export default function MostSoldProduct() {
  const dispatch = useDispatch();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-8 items-center mt-14 md:mt-20">
      <div>
        <h4 className="text-3xl font-bold text-black">One (1) 550g Tin of Milky</h4>
        <p className="text-lg font-normal mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, animi quaerat repellat non in perspiciatis excepturi totam odio minima
          delectus accusamus harum ab. Consequatur cumque voluptate maxime aliquam perspiciatis quae!
        </p>
        <div className="mt-10">
          <Button text="Add to cart" onClick={() => dispatch(increment("52977"))} />
        </div>
      </div>
      <div>
        <img src={Bigimg} alt="bigimg" className="w-full" />
      </div>
    </div>
  );
}
