export const getDefaultRanges = (max) => {
  const percents = [0, 25, 50, 60, 70, 80, 90, 95, 98, 100];

  return percents.map((percent, ind, arr) => {
    const start = Math.floor((max / 100) * percent) || 1;

    const next = arr[ind + 1];
    const end = Math.floor((max / 100) * next - 1) || max;
    return { percentRange: [percent, next], range: [start, end] };
  });
};

export const getDozenRanges = (max) => {
  let start = 0;
  const ranges = [];
  ranges.push({ range: [start + 1, start + 9] });
  start += 10;

  while (start <= max) {
    const end = start !== max ? start + 9 : max;
    ranges.push({ range: [start, end] });
    start += 10;
  }

  return ranges;
};
