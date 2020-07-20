export default function convertSecToMin(secs) {
  const mins = Math.floor(secs / 60);
  let remaingSec = Math.floor(secs) % 60;

  return secs <= 59 ? (remaingSec < 10 ? mins + ":0" + Math.floor(secs) : mins + ":" + Math.floor(secs)) : (remaingSec < 10 ? mins + ":0" + remaingSec : mins + ":" + remaingSec);
}