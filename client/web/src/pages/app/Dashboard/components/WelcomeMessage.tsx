import React from "react";

interface WelcomeMessageProps {
  userName: string;
}

export const WelcomeMessage: React.FC<WelcomeMessageProps> = ({ userName }) => {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  let greeting = "";

  if (hours < 12) {
    greeting = "おはようございます";
  } else if (hours < 18) {
    greeting = "こんにちは";
  } else {
    greeting = "こんばんは";
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h1 className="text-2xl font-bold text-gray-800">
        {greeting}、{userName}さん
      </h1>
      <p className="text-gray-600 mt-2">
        {currentTime.toLocaleDateString("ja-JP", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
    </div>
  );
};
