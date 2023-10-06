import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  // YAxis,
  //   CartesianGrid,
  Tooltip,
  //   Legend,
  //   ResponsiveContainer,
} from "recharts";

function Dashboard() {
  const [marks, setMarks] = useState([]);

  useEffect(() => {
    fetch("marks.json")
      .then((res) => res.json())
      .then((data) => setMarks(data));
  }, []);
  return (
    <>
      <div className="my-24 mx-8">
        <h1 className="text-purple-700 font-bold text-xl py-10 text-center">
          Marks of 12 students of Three Subjects
        </h1>
        <LineChart width={1000} height={300} data={marks}>
          <XAxis dataKey="name" />
          {/* <YAxis /> */}
          <Tooltip />
          <Line stroke="#81ca9d" dataKey="chemistry"></Line>
          <Line stroke="#8884d8" dataKey="math" />
          <Line stroke="#82ca9d" dataKey="physics" />
        </LineChart>
      </div>
    </>
  );
}

export default Dashboard;
