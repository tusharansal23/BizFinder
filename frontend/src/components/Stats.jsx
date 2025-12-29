import { useEffect, useState } from "react";
import "../styles/stats.css";

const statsData = [
  { label: "Businesses", value: 10000 },
  { label: "Cities", value: 50 },
  { label: "Searches", value: 1000000 },
  { label: "Verified Listings", value: 1 },
];

const Stats = () => {
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const timers = statsData.map((stat, index) => {
      const increment = Math.ceil(stat.value / 200); // speed of counting
      return setInterval(() => {
        setCounts(prev => {
          const newCounts = [...prev];
          if (newCounts[index] < stat.value) {
            newCounts[index] += increment;
            if (newCounts[index] > stat.value) newCounts[index] = stat.value;
          }
          return newCounts;
        });
      }, 20);
    });

    return () => timers.forEach(timer => clearInterval(timer));
  }, []);

  return (
    <section className="stats">
      {statsData.map((stat, index) => (
        <div className="stat-card" key={index}>
          <h3>
            {counts[index].toLocaleString()}
            {stat.label === "Verified Listings" ? "+" : ""}
          </h3>
          <p>{stat.label}</p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
