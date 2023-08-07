"use client";

import { useState, useRef, useEffect } from "react";
import { Features } from "@/components/HomeComponents/Features";
import "./fontawesomeImports";
import "./home.css";
import IcBaselineLightbulbCircle from "@/icones/IcBaselineLightbulbCircle";
import IcBaselineCircleNotifications from "@/icones/IcBaselineCircleNotifications";
import CarbonFlow from "@/icones/CarbonFlow";
import MaterialSymbolsTask from "@/icones/MaterialSymbolsTask";
import MaterialSymbolsScreenSearchDesktopRounded from "@/icones/MaterialSymbolsScreenSearchDesktopRounded";
import MaterialSymbolsAnalyticsRounded from "@/icones/MaterialSymbolsAnalyticsRounded";

export default function Home() {
  // States
  const [showTaskManagement, setShowTaskManagement] = useState<boolean>(false);
  const [taskManagementVis, setTaskManagementVis] = useState<boolean>(false);

  // Ref
  const taskManagementRef = useRef<HTMLDivElement>(null);

  // Get current position of task management div
  const getTaskManagementDivPosition = () => {
    let taskManagementPositionY = taskManagementRef.current?.offsetTop;
    const currentViewPointY = window.scrollY;
    if (taskManagementPositionY === undefined) return;
    taskManagementPositionY -= 570;
    // Check if task management div is visible on screen
    if (currentViewPointY > taskManagementPositionY) {
      setTaskManagementVis(true);
    }
  };

  //UseEffect
  // Get position on first render
  useEffect(() => {
    getTaskManagementDivPosition();
  }, []);
  // Get position when resize happens
  useEffect(() => {
    window.addEventListener("scroll", getTaskManagementDivPosition);

    return () => {
      window.removeEventListener("scroll", getTaskManagementDivPosition);
    };
  }, []);
  return (
    <main className="flex flex-col items-center relative justify-between bg-Primary font-Roboto">
      <section className="relative phone:w-full phone:h-[550px] laptop:h-[650px] laptop:isolate laptop:after:absolute laptop:after:bg-Secondary laptop:after:inset-0 laptop:after:-z-10 laptop:after:content-[''] laptop:after:skew-y-[4deg]">
        <div className="p-1.5 flex flex-col gap-5 text-center phone:absolute phone:w-[95%] phone:top-2/4 phone:left-2/4 phone:-translate-y-2/4 phone:-translate-x-2/4 tablet:max-w-[640px]">
          <h1 className="phone:text-4xl tablet:text-5xl font-bold">
            <span className="text-LightPrimary">TaskFlow</span>
          </h1>
          <h2 className="phone:text-3xl table:text-4xl font-bold">Master Your Productivity</h2>
          <p className="py-2 px-6 phone:text-base tablet:text-lg text-LightSecondary">
            Managing tasks made easy with TaskFlow, the all-in-one task
            management solution. Streamline your workflow, stay organized, and
            boost productivity with intuitive task creation, seamless
            collaboration, and insightful reporting. Experience the power of
            efficient task management at your fingertips.
          </p>
          <button className="bg-LightPrimary hover:bg-[#01848a] text-LightSecondary w-max px-8 py-2 mx-auto my-0 rounded-xl ease-in-out duration-300">
            Get Started
          </button>
        </div>
      </section>
      <section
        ref={taskManagementRef}
        className={`overflow-hidden phone:mt-44 flex justify-center items-center relative phone:w-full phone:h-[320px] mdphone:h-[400px] tablet:h-[480px] tablet:max-w-[600px]`}
      >
        <div
          className={`${
            taskManagementVis && "progress-bar"
          } flex justify-center items-center rounded-[50%] phone:h-[95%] phone:w-[80%]`}
          onAnimationEnd={() => setShowTaskManagement(true)}
        ></div>
        <div
          className={`bg-LightSecondary rounded-lg phone:w-[80%] phone:h-[68%] absolute task-management-container ${
            showTaskManagement ? "left-[15%]" : "left-[100%]"
          }`}
        ></div>
      </section>
      <section className="p-4 phone:mt-48 phone:w-full flex phone:flex-col tablet:items-center gap-6">
        <div className="flex flex-col gap-3 mb-14 mx-auto tablet:max-w-[620px]">
          <h1 className="text-center phone:text-3xl font-bold text-LightPrimary">
            Meet TaskFlow
          </h1>
          <p className="text-center phone:text-lg leading-8">
            The ultimate task management solution designed to revolutionize the
            way you work. With its intuitive interface and powerful features,
            TaskFlow empowers you to take control of your tasks and boost your
            productivity. Discover the exceptional features of TaskFlow below.
          </p>
        </div>
        <Features
          image="sample"
          name="Intuitive Task Creation"
          desc="Easily create tasks with a user-friendly interface, providing fields for title, description, due date, and priority level, making it effortless to capture and organize your to-dos."
          icones={<IcBaselineLightbulbCircle />}
        />
        <Features
          image="sample"
          name="Smart Notifications and Reminders"
          desc="Stay on top of your tasks with intelligent notifications and reminders, ensuring you never miss important deadlines or updates"
          icones={<IcBaselineCircleNotifications />}
        />
        <Features
          image="sample"
          name="Customizable Workflows"
          desc="Tailor the task management system to your unique workflow with customizable project categories, task statuses, and labels, enabling you to adapt the system to your preferred organization method"
          icones={<CarbonFlow />}
        />
        <Features
          image="sample"
          name="Visual Task Boards"
          desc="Visualize your tasks in intuitive Kanban boards or traditional task lists, providing a clear overview of task progress and allowing for easy prioritization and reordering"
          icones={<MaterialSymbolsTask />}
        />
        <Features
          image="sample"
          name="Advanced Search and Filters"
          desc="Quickly find specific tasks with advanced search functionalities and powerful filters, enabling you to locate tasks based on keywords, dates, categories, or assigned team members"
          icones={<MaterialSymbolsScreenSearchDesktopRounded />}
        />
        <Features
          image="sample"
          name="Insightful Analytics and Reports"
          desc="Gain valuable insights into your productivity and team performance with visual analytics and reports, tracking task completion rates, time spent, and other key metrics, helping you make data-driven decisions"
          icones={<MaterialSymbolsAnalyticsRounded />}
        />
      </section>
      <section className="p-4 phone:mt-48 phone:w-full flex phone:flex-col gap-6 bg-Secondary">
        <h1 className="text-center phone:text-3xl font-bold text-LightPrimary">
          Stay up to date
        </h1>
        <p className="text-center phone:text-lg leading-8 mx-auto tablet:tablet:max-w-[540px]">
          To stay in the loop with the latest updates and feature enhancements,
          don&rsquo;t forget to submit your profile! By providing your
          information, you&rsquo;ll receive exclusive access to upcoming
          features, improvements, and exciting releases.
        </p>
        <input
          className="p-3 w-10/12 rounded-lg mx-auto my-0 text-black outline-none tablet:max-w-[460px]"
          type="email"
          placeholder="Enter your Email"
          name="email"
        />
        <button
          className="w-max my-0 mx-auto py-3 px-6 bg-LightPrimary rounded-lg cursor-pointer hover:scale-110 active:scale-95 ease-in-out duration-100"
          type="button"
        >
          Subscribe
        </button>
      </section>
    </main>
  );
}
