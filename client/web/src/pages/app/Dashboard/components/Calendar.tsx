import React from "react";
import { Calendar as CalendarIcon } from "lucide-react";

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
}

interface CalendarProps {
  events: Event[];
}

export const Calendar: React.FC<CalendarProps> = ({ events }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-semibold mb-4">カレンダー</h2>
      <ul className="space-y-2">
        {events.map((event) => (
          <li key={event.id} className="flex items-start">
            <CalendarIcon className="mr-2 h-5 w-5 text-blue-500" />
            <div>
              <p className="text-sm font-medium text-gray-800">{event.title}</p>
              <p className="text-xs text-gray-500">
                {event.date} {event.time}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
