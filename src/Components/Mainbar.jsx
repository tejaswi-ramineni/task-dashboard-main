import { useState } from "react";
import Task from "./Task";
import classNames from "classnames";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
function Mainbar() {
  const [isWeek, setIsWeek] = useState(true);
  const tasks = [
    {
      title: "EduPath",
      description: "Platform for online learning and professional development",
      category: "Design",
      timeLog: "Log: 13h 20m",
      categoryColor: "bg-Green",
    },
    {
      title: "GreenMarket",
      description: "Eco-friendly online grocery and household goods store.",
      category: "Concept",
      timeLog: "Log: 8h 20m",
      categoryColor: "bg-Blue",
    },
    {
      title: "TravelTales",
      description:
        "A social network for travelers to share stories and plan trips.",
      category: "Re-design",
      timeLog: "Log: 8h 40m",
      categoryColor: "bg-Orange",
    },
    {
      title: "HealthMate",
      description: "A wellness app for tracking fitness goals and activities.",
      category: "Development",
      timeLog: "Log: 15h 10m",
      categoryColor: "bg-Green",
    },
    {
      title: "ShopWise",
      description:
        "An app for comparing prices and finding the best deals online.",
      category: "Marketing",
      timeLog: "Log: 10h 30m",
      categoryColor: "bg-Blue",
    },
  ];
  return (
    <div className="w-4/5 rounded-2xl bg-Gray p-5 flex items-center gap-4">
      <div className="w-3/5 h-full p-1 flex flex-col gap-6">
        <div className="h-2/5 rounded-2xl bg-White p-4">
          <div className="h-1/6 flex justify-between">
            <p className="text-Black font-medium text-xl">Activity</p>
            <div
              className={classNames(
                "flex w-30 h-full rounded-full transition-all duration-300 cursor-pointer bg-White"
              )}
              onClick={() => {
                console.log(isWeek);
                setIsWeek((prev) => !prev);
              }}
            >
              <span className="flex items-center">
                <p
                  className={classNames("px-4 py-2 rounded-full", {
                    "bg-black text-white": isWeek,
                  })}
                >
                  Week
                </p>
                <p
                  className={classNames("px-4 py-2 rounded-full", {
                    "bg-black text-white": !isWeek,
                  })}
                >
                  Month
                </p>
              </span>
            </div>
          </div>
          <div className="h-5/6 mt-3 p-2">
            <Bar
              className="h-full w-full"
              data={{
                labels: [
                  "02.08",
                  "03.08",
                  "04.08",
                  "05.08",
                  "06.08",
                  "07.08",
                  "08.08",
                ],
                datasets: [
                  {
                    data: [6, 8, 9, 2, 5, 7, 2],
                    backgroundColor: "#625bf6", 
                    borderColor: "#625bf6", 
                    borderWidth: 0,
                    borderRadius : 4
                  },
                ],
              }}
              options={{
                maintainAspectRatio: false,
                scales: {
                  y: {
                    display: false, 
                    beginAtZero: true,
                    grid: {
                      display: false, 
                    },
                  },
                  x: {
                    grid: {
                      display: false, 
                    },
                  },
                },
                plugins: {
                  legend: {
                    display: false, 
                  },
                  tooltip: {
                    enabled: false, 
                  },
                },
              }}
            />
          </div>
        </div>
        <div className="h-3/5 rounded-2xl bg-White p-4">
          <div className="text-xl font-medium mb-4" style={{ height: "10%" }}>
            My Schedule
          </div>
          <div
            className="flex flex-col gap-1 text-White"
            style={{ height: "90%" }}
          >
            <div className="flex justify-between items-center">
              <span className="w-1/6 text-Black">Mon</span>
              <div className="flex justify-between bg-Gray rounded-xl w-5/6 p-1 text-xs">
                <div className="w-2/6 bg-Blue p-2 rounded-lg">GreenMarket</div>
                <div className="w-3/6 bg-Green p-2 rounded-lg">EduPath</div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="w-1/6 text-Black">Tue</span>
              <div className="flex justify-start bg-Gray rounded-xl w-5/6 p-1 text-xs gap-20">
                <div
                  className="bg-Blue p-2 rounded-lg"
                  style={{ width: "20%" }}
                >
                  GreenMarket
                </div>
                <div className="w-1/4 bg-Green p-2 rounded-lg">EduPath</div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="w-1/6 text-Black">Wed</span>
              <div className="flex justify-between bg-Gray rounded-xl w-5/6 p-1 text-xs">
                <div className="w-1/5 bg-Green p-2 rounded-lg">EduPath</div>
                <div
                  className="bg-Blue p-2 rounded-lg"
                  style={{ width: "20%" }}
                >
                  GreenMarket
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="w-1/6 text-Black">Thu</span>
              <div className="flex justify-between bg-Gray rounded-xl w-5/6 p-1 text-xs">
                <div className="w-full bg-Orange p-2 rounded-lg">
                  TravelTales
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="w-1/6 text-Black">Fri</span>
              <div className="flex justify-between bg-Gray rounded-xl w-5/6 p-1 text-xs">
                <div
                  className="bg-Blue p-2 rounded-lg"
                  style={{ width: "20%" }}
                >
                  GreenMarket
                </div>
                <div className="w-3/6 bg-Green p-2 rounded-lg">EduPath</div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="w-1/6"></span>
              <div className="flex justify-between w-5/6 p-1 text-xs text-Black">
                <span>10:00</span>
                <span>12:00</span>
                <span>14:00</span>
                <span>16:00</span>
                <span>18:00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-2/5 bg-White rounded-2xl p-1 h-full overflow-y-scroll">
        <div className="flex justify-between m-2 items-center">
          <h1 className="text-Black font-medium text-lg">Task board</h1>{" "}
          <button className="bg-Black px-4 py-2 text-xs text-White rounded-3xl">
            All task
          </button>
        </div>
        {tasks.map((task, index) => (
          <Task key={index} {...task} />
        ))}
      </div>
    </div>
  );
}

export default Mainbar;
