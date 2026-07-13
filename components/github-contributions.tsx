"use client";

import { useEffect, useState } from "react";
import { Github } from "lucide-react";

const contributionLevels = [
  "bg-emerald-100 dark:bg-emerald-950",
  "bg-emerald-300 dark:bg-emerald-800",
  "bg-emerald-500 dark:bg-emerald-600",
  "bg-emerald-700 dark:bg-emerald-400",
];

type DayData = {
  date: string;
  count: number;
  level: number;
};

const GITHUB_USERNAME = "asmit990";

export function GitHubContributions() {
  const [days, setDays] = useState<DayData[] | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function fetchContributions() {
      try {
        const res = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`
        );

        if (!res.ok) throw new Error("Failed to fetch");

        const data = await res.json();

        if (!cancelled) {
          setDays(data.contributions as DayData[]);
        }
      } catch {
        if (!cancelled) {
          setError(true);
        }
      }
    }

    fetchContributions();

    return () => {
      cancelled = true;
    };
  }, []);

  const weeks: (DayData | null)[][] = [];

  if (days) {
    const firstDate = new Date(days[0].date);
    const padStart = firstDate.getDay();

    const padded: (DayData | null)[] = [
      ...Array(padStart).fill(null),
      ...days,
    ];

    for (let i = 0; i < padded.length; i += 7) {
      weeks.push(padded.slice(i, i + 7));
    }
  }

  return (
    <section
      className="mt-8 section-lines p-4"
      aria-labelledby="github-heading"
    >
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <h3
            id="github-heading"
            className="text-sm font-semibold text-neutral-900 dark:text-neutral-50"
          >
            GitHub activity.
          </h3>

          <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
            Building consistently, one commit at a time.
          </p>
        </div>

        <a
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noreferrer"
          aria-label="Open GitHub profile"
          className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-neutral-200 text-neutral-700 transition-colors hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900"
        >
          <Github className="h-4 w-4" />
        </a>
      </div>

      <a
        href={`https://github.com/${GITHUB_USERNAME}`}
        target="_blank"
        rel="noreferrer"
        aria-label="View GitHub contribution graph"
        className="block overflow-x-auto rounded-lg border border-neutral-200 bg-white p-3 transition-colors hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-900/40"
      >
        <div className="min-w-[590px]">
          {error && (
            <p className="text-xs text-red-500">
              Couldn't load GitHub contributions.
            </p>
          )}

          {!days && !error && (
            <p className="text-xs text-neutral-400">
              Loading contributions...
            </p>
          )}

          {days && (
            <div className="flex gap-1">
              <div className="grid grid-rows-7 gap-1 pr-1 text-[9px] leading-2 text-neutral-400 dark:text-neutral-500">
                <span />
                <span>Mon</span>
                <span />
                <span>Wed</span>
                <span />
                <span>Fri</span>
                <span />
              </div>

              <div className="grid grid-flow-col grid-rows-7 gap-1">
                {weeks.flatMap((week, wIdx) =>
                  week.map((d, dIdx) => {
                    if (!d) {
                      return (
                        <span
                          key={`${wIdx}-${dIdx}-empty`}
                          className="h-2.5 w-2.5"
                        />
                      );
                    }

                    const level = Math.min(d.level, 4);

                    return (
                      <span
                        key={d.date}
                        title={`${d.date}: ${d.count} contributions`}
                        className={`h-2.5 w-2.5 rounded-sm ${
                          level === 0
                            ? "bg-neutral-100 dark:bg-neutral-800"
                            : contributionLevels[level - 1]
                        }`}
                      />
                    );
                  })
                )}
              </div>
            </div>
          )}

          <div className="mt-3 flex items-center justify-end gap-1.5 text-[10px] text-neutral-400 dark:text-neutral-500">
            <span>Less</span>

            <span className="h-2.5 w-2.5 rounded-sm bg-neutral-100 dark:bg-neutral-800" />

            {contributionLevels.map((color) => (
              <span
                key={color}
                className={`h-2.5 w-2.5 rounded-sm ${color}`}
              />
            ))}

            <span>More</span>
          </div>
        </div>
      </a>
    </section>
  );
}