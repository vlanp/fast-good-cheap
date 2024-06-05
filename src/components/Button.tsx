import FastGoodCheap from "../enum/FastGoodCheap";

const Button = ({
  id,
  state,
  text,
  callback,
}: {
  id: FastGoodCheap;
  state: boolean;
  text: string;
  callback: ({ id }: { id: FastGoodCheap }) => void;
}) => {
  return (
    <div
      className="button"
      onClick={() => {
        callback({ id });
      }}
    >
      <div className={state ? "activated" : ""}>
        <div className="round"></div>
        <div className="skel"></div>
      </div>
      <p>{text}</p>
    </div>
  );
};

export default Button;
