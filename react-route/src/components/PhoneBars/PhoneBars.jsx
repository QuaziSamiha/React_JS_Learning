import axios from "axios";
import { useState } from "react";
import {
  BarChart,
  Bar,
  // Cell,
  XAxis,
  YAxis,
  // CartesianGrid,
  // Tooltip,
  // Legend,
  // ResponsiveContainer,
} from "recharts";

function PhoneBars() {
  const [phones, setPhones] = useState([]);
  //   fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
  //     .then((res) => res.json())
  //     .then((data) => setPhones(data));
  axios
    .get("https://openapi.programming-hero.com/api/phones?search=iphone")
    .then((data) => {
      //   console.log(data);
      const loadedData = data.data.data;
      //   console.log(loadedData);
      const phonesData = loadedData.map((phone) => {
        const parts = phone.slug.split("-");
        const price = parseInt(parts[1]);
        const phoneInfo = {
          name: phone.phone_name,
          price: price,
        };
        return phoneInfo;
      });
      //   console.log(phonesData);
      setPhones(phonesData);
    });
  return (
    <>
      <div className="mx-44 my-16">
        <BarChart width={400} height={400} data={phones}>
          <XAxis dataKey="name" />
          <YAxis dataKey="price" />
          <Bar dataKey="price" fill="#8884d8" />
        </BarChart>
      </div>
    </>
  );
}

export default PhoneBars;
