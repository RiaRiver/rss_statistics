import { store } from '../store';
import { getDefaultRanges, getDozenRanges } from './helpers';

/**
 * Retrieves the task scores for the specified task and students.
 *
 * @param {Array} students - The array of student objects.
 * @param {number} taskId - The ID of the task to retrieve scores for.
 * @return {Array} The array of task results for the specified task ({taskId, score).
 */
export const getTaskScores = (students, taskId, withoutZeros = true) => students
  .map((student) => student.taskResults
    .find((task) => task.courseTaskId === taskId))
  .filter((item) => item)
  .map(({ score }) => score)
  .filter((score) => score || !withoutZeros);

const getScoreStat = (ranges, scores, passCountTotal, percentFlag) => {
  const scoreStat = ranges.map((range) => {
    const [min, max] = range.range;
    const count = scores.filter((score) => min <= score && score <= max).length;

    return {
      // range: `${min}-${max}`,
      // percentRange: `[${percentMin};${percentMax})`,
      ...range,
      count,
      ...(percentFlag && {
        percentage: ((count / passCountTotal) * 100).toFixed(2),
      }),
    };
  });

  return scoreStat;
};

export const getStat = (taskId, percentFlag) => {
  const students = store.getState('score');
  const studentsActive = students.filter((student) => student.active);
  const scoresTotal = getTaskScores(students, taskId);
  const passCountTotal = scoresTotal.length;
  const passCountActive = getTaskScores(studentsActive, taskId).length;
  const maxScore = Math.max(...scoresTotal);

  const rangesPercent = getDefaultRanges(maxScore);
  const rangesDozen = getDozenRanges(maxScore);
  const scoreStatPercent = getScoreStat(rangesPercent, scoresTotal, passCountTotal, percentFlag);
  const scoreStatDozens = getScoreStat(rangesDozen, scoresTotal, passCountTotal, percentFlag);

  return {
    passCountTotal, passCountActive, scoreStatPercent, scoreStatDozens,
  };
};

export const getTaskStat = (taskId) => {
  const stat = store.getState('taskStat');

  if (stat && stat[taskId]) return stat[taskId];

  const newStat = getStat(taskId, true);

  store.setStateOfCollection('taskStat', taskId, newStat);

  return newStat;
};
