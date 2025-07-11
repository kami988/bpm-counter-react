// タップ間隔を記録する配列
export const calculateInterval = (
  oldTappedAt: number,
  tappedAt: number,
): number => {
  // タップ間隔を計算
  const interval = tappedAt - oldTappedAt;
  // タップ間隔を返す
  return interval;
};

// 全タップ間隔からBPMを計算
export const calculateBPM = (intervals: number[]): number => {
  if (intervals.length < 1) {
    return 0;
  }

  // タップ間隔の平均値からBPMを計算
  const averageInterval =
    intervals.reduce((acc, interval) => acc + interval, 0) / intervals.length;

  const bpm = 60000 / averageInterval;

  return bpm;
};

// 直近2回のタップ間隔からBPMを計算
export const calculateInstantBPM = (intervals: number[]): number => {
  if (intervals.length < 1) {
    return 0;
  }

  const lastInterval = intervals.slice(-1)[0];

  const bpm = 60000 / lastInterval;

  return bpm;
};
