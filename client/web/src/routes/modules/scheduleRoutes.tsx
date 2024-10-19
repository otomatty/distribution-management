import { Route, Routes } from "react-router-dom";
import CalendarView from "@/pages/app/schedule/CalendarView";
import TaskManagement from "@/pages/app/schedule/TaskManagement";
import EventPlanning from "@/pages/app/schedule/EventPlanning";

export const ScheduleRoutes = () => (
  <Routes>
    <Route path="calendar" element={<CalendarView />} />
    <Route path="tasks" element={<TaskManagement />} />
    <Route path="events" element={<EventPlanning />} />
  </Routes>
);
