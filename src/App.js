import logo from "./logo.svg";
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";
import img_chart from "./img_chart.png";
import img_reaction1 from "./img_reaction1.png";
import img_reaction2 from "./img_reaction2.png";

import { useRef } from "react";

import { useGsapUpward, useGsapDownStagger, useGsapFade, useGsapShutterUnveil } from "./gasp";

function App() {

  const mframe = useRef(null);
  const mheader = useRef(null);

  const item1 = useRef(null);
  const item2 = useRef(null);
  const item3 = useRef(null);

  const itemArr = [item1, item2, item3];

  useGsapFade(mframe, 0);
  useGsapUpward(mheader, 0.5);
  useGsapDownStagger(itemArr, 1.5);

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-[#151817] text-white overflow-hidden">
      <div className="w-96 bg-[#1e2020] border-solid border-[1px] border-[#2d302f] rounded-md" ref={mframe}>
        <div className=" px-4 py-2 border-b-[1px] border-[#2d302f] text-lg" ref={mheader}>
          #data-questions
        </div>

        <div className="py-2 px-4 flex gap-4" ref={item1}>
          <img
            className="w-10 h-10 border-solid border-[1px] border-[#2d302f] rounded-md"
            src={img1}
            alt=""
          />
          <div>
            <div>Kiara Ghosh</div>
            <div className="text-[#d0d1d3bb]">
              {" "}
              <span className="text-[#4da0f9]">@Shape</span> What are our free
              to paid conversations from Jan 2023 onwards.
            </div>
          </div>
        </div>

        <div className="py-2 px-4 flex gap-4" ref={item2}>
          <img
            className="w-10 h-10 border-solid border-[1px] border-[#2d302f] rounded-md"
            src={img2}
            alt=""
          />
          <div>
            <div className="flex gap-1 items-center">
              <div>Shape</div>
              <div className="bg-[#34373a] rounded-sm text-xs px-1 leading-tight text-[#d0d1d3bb]">
                App
              </div>
            </div>
            <div className="text-[#d0d1d3bb]">
              {" "}
              From Jan 2023, 34% of free customers converted to one of our paid
              plans.
            </div>
            <img
              className="border-solid border-[1px] border-[#2d302f] rounded-lg my-2"
              src={img_chart}
              alt=""
            ></img>
            <div className="text-[#d0d1d3bb]">
              {" "}
              Approved by <span className="text-[#4da0f9]">@Lisa Steadman</span>
            </div>
            <div className="flex gap-2 pt-2">
              <div className="text-[#d0d1d3bb] border-solid border-[1px] border-[#ffffff99] rounded-md p-1 leading-none">
                SQL
              </div>
              <div className="text-[#d0d1d3bb] border-solid border-[1px] border-[#ffffff99] rounded-md p-1 leading-none">
                CSV
              </div>
            </div>
          </div>
        </div>

        <div className="py-2 px-4 flex gap-4" ref={item3}>
          <img
            className="w-10 h-10 border-solid border-[1px] border-[#2d302f] rounded-md"
            src={img3}
            alt=""
          />
          <div>
            <div>Mason Valdo</div>
            <div className="text-[#d0d1d3bb]">
              {" "}
              That's a great conversation rate, will highlight this in the
              all-hands.
            </div>
            <div className="flex gap-1 pt-2">
              <button className="bg-[#2d2f2e] rounded-xl flex items-center px-2">
                <img className="w-4 h-4" src={img_reaction1} alt="" /> <span className="text-[#d0d1d3bb] ml-1">2</span>
              </button>
              <button className="bg-[#2d2f2e] rounded-xl flex items-center px-2">
                <img className="w-4 h-4" src={img_reaction2} alt="" /> <span className="text-[#d0d1d3bb] ml-1">1</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
