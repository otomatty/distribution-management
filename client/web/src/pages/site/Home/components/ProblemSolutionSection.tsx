import React from "react";

const problems = [
  {
    problem: "在庫の過不足",
    solution: "AIを活用した需要予測と自動発注システム",
  },
  {
    problem: "非効率な在庫管理",
    solution: "リアルタイムの在庫追跡と最適化アルゴリズム",
  },
  {
    problem: "複雑な流通プロセス",
    solution: "ワークフロー自動化とプロセスの可視化",
  },
];

const ProblemSolutionSection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          あなたの課題、私たちが解決します
        </h2>
        <div className="space-y-8">
          {problems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center justify-between bg-gray-50 p-6 rounded-lg"
            >
              <div className="md:w-1/2 mb-4 md:mb-0">
                <h3 className="text-xl font-semibold text-red-600">
                  問題: {item.problem}
                </h3>
              </div>
              <div className="md:w-1/2">
                <h3 className="text-xl font-semibold text-green-600">
                  解決策: {item.solution}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
