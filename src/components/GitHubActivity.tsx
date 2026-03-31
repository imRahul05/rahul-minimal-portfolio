import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeProvider';
interface ContributionDay {
  date: string;
  count: number;
  level: number;
}
interface ContributionWeek {
  days: ContributionDay[];
}
const ORANGE_COLORS = {
  light: ['#fff7ed', '#fed7aa', '#fb923c', '#ea580c', '#9a3412'],
  dark: ['#1c1917', '#431407', '#9a3412', '#ea580c', '#fb923c']
};
const MONTHS = [
'Jan',
'Feb',
'Mar',
'Apr',
'May',
'Jun',
'Jul',
'Aug',
'Sep',
'Oct',
'Nov',
'Dec'];

export function GitHubActivity() {
  const { theme } = useTheme();
  const [weeks, setWeeks] = useState<ContributionWeek[]>([]);
  const [totalContributions, setTotalContributions] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    fetch('https://github-contributions-api.jogruber.de/v4/imrahul05?y=last').
    then((res) => {
      if (!res.ok) throw new Error('Failed to fetch');
      return res.json();
    }).
    then((data) => {
      if (data.contributions) {
        // Group contributions into weeks
        const allDays: ContributionDay[] = data.contributions.map(
          (d: {date: string;count: number;level: number;}) => ({
            date: d.date,
            count: d.count,
            level: d.level
          })
        );
        const grouped: ContributionWeek[] = [];
        for (let i = 0; i < allDays.length; i += 7) {
          grouped.push({
            days: allDays.slice(i, i + 7)
          });
        }
        setWeeks(grouped);
        setTotalContributions(
          data.total?.lastYear ??
          allDays.reduce(
            (sum: number, d: ContributionDay) => sum + d.count,
            0
          )
        );
      }
      setLoading(false);
    }).
    catch(() => {
      setError(true);
      setLoading(false);
    });
  }, []);
  const colors = theme === 'dark' ? ORANGE_COLORS.dark : ORANGE_COLORS.light;
  // Calculate month labels from weeks data
  const monthLabels: {
    label: string;
    col: number;
  }[] = [];
  if (weeks.length > 0) {
    let lastMonth = -1;
    weeks.forEach((week, i) => {
      const firstDay = week.days[0];
      if (firstDay) {
        const month = new Date(firstDay.date).getMonth();
        if (month !== lastMonth) {
          monthLabels.push({
            label: MONTHS[month],
            col: i
          });
          lastMonth = month;
        }
      }
    });
  }
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 20
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      viewport={{
        once: true,
        margin: '-100px'
      }}
      transition={{
        duration: 0.5
      }}
      className="py-6">
      
      <h2 className="mb-8 font-serif text-3xl font-medium text-neutral-900 dark:text-white">
        GitHub Activity
      </h2>

      <div className="overflow-x-auto rounded-xl border border-neutral-200 bg-white p-4 sm:p-6 dark:border-neutral-800 dark:bg-neutral-900">
        {loading ?
        <div className="flex h-32 items-center justify-center">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-orange-500 border-t-transparent" />
          </div> :
        error ?
        <div className="flex h-32 items-center justify-center text-sm text-neutral-500">
            Unable to load GitHub contributions.
          </div> :

        <div>
            <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">
              <span className="font-semibold text-neutral-900 dark:text-white">
                {totalContributions.toLocaleString()}
              </span>{' '}
              contributions in the last year
            </p>

            {/* Month labels */}
            <div
            className="relative mb-1 ml-8 flex text-[10px] text-neutral-400 dark:text-neutral-500"
            style={{
              gap: 0
            }}>
            
              {monthLabels.map((m, i) =>
            <span
              key={i}
              className="absolute"
              style={{
                left: m.col * 16
              }}>
              
                  {m.label}
                </span>
            )}
            </div>

            <div className="flex gap-0">
              {/* Day labels */}
              <div
              className="mr-2 flex flex-col justify-between py-[2px] text-[10px] text-neutral-400 dark:text-neutral-500"
              style={{
                height: 7 * 16 - 4
              }}>
              
                <span className="leading-[16px]">Mon</span>
                <span className="leading-[16px]">Wed</span>
                <span className="leading-[16px]">Fri</span>
              </div>

              {/* Grid */}
              <div className="flex gap-[3px]">
                {weeks.map((week, wi) =>
              <div key={wi} className="flex flex-col gap-[3px]">
                    {week.days.map((day, di) =>
                <div
                  key={di}
                  title={`${day.count} contribution${day.count !== 1 ? 's' : ''} on ${day.date}`}
                  className="rounded-sm transition-colors"
                  style={{
                    width: 13,
                    height: 13,
                    backgroundColor: colors[day.level] || colors[0]
                  }} />

                )}
                  </div>
              )}
              </div>
            </div>

            {/* Legend */}
            <div className="mt-4 flex items-center justify-end gap-1.5 text-[10px] text-neutral-500 dark:text-neutral-400">
              <span>Less</span>
              {colors.map((color, i) =>
            <div
              key={i}
              className="rounded-sm"
              style={{
                width: 13,
                height: 13,
                backgroundColor: color
              }} />

            )}
              <span>More</span>
            </div>
          </div>
        }
      </div>

      <div className="my-10 h-px w-full bg-neutral-200 dark:bg-neutral-800" />
    </motion.section>);

}