export function changeDuration(duration: number): string {
  const hours = Math.floor(duration / 60)
  const minutes = duration - hours * 60
  return `${hours} ч ${minutes} мин`
}
