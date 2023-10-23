import Timer from "./Timer";
import TimingsList from "./TimingsList";
import RuneAlert from "./RuneAlert";

export default function Card({
  expand,
  handleClick,
  msgActive,
  runeMessage,
  count,
  runes,
}) {
  return (
    <div
      className="card"
      style={{
        height: expand ? "600px" : "148px",
      }}
    >
      <Timer time={count} />
      <TimingsList
        handleClick={handleClick}
        expandCard={expand}
        runes={runes}
      />
      <RuneAlert runeTrigger={msgActive} textObj={runeMessage} />
    </div>
  );
}
