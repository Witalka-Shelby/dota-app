import Timer from "./Timer";
import TimingsList from "./TimingsList";
import RuneAlert from "./RuneAlert";
import Box from "@mui/material/Box";

export default function Card({
  expand,
  handleClick,
  msgActive,
  runeMessage,
  count,
  runes,
}) {
  return (
    <div>
      <Box
        className="card"
        sx={{
          boxShadow: 3,
          width: "400px",
          height: expand ? "600px" : "148px",
          borderRadius: 2,
          textAlign: "center",
          fontSize: "0.875rem",
          fontWeight: "700",
        }}
      >
        <Timer time={count} />
        <TimingsList
          handleClick={handleClick}
          expandCard={expand}
          runes={runes}
        />
      </Box>

      <RuneAlert runeTrigger={msgActive} textObj={runeMessage} />
    </div>
  );
}
