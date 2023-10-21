import Timer from "./Timer";
import TimingsList from "./TimingsList";
import RuneAlert from "./RuneAlert";

export default function Card({
  expand,
  handleClick,
  rune,
  runeMessage,
  count,
}) {
  return (
    <div
      className="card"
      style={{
        height: expand ? "600px" : "148px",
      }}
    >
      <Timer time={count} />
      <TimingsList toggleCard={handleClick} expandCard={expand} />
      <RuneAlert runeTrigger={rune} text={runeMessage} />
    </div>
  );
}
