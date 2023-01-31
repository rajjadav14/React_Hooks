import Click from "./ClickCounter";
import Wrapper from "./CountWrapper";
import Hover from "./HoverCounter";


export default function index() {
  return (
    <>
      <Wrapper
        render={(count: any, incrementCount: any) => (
          <Click count={count} incrementCount={incrementCount} />
        )}
      />
      <Wrapper
        render={(count: any, incrementCount: any) => (
          <Hover count={count} incrementCount={incrementCount} />
        )}
      />
    </>
  );
}
