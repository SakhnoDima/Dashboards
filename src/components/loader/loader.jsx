import { Comment } from "react-loader-spinner";
import { StyledLoader } from "./styled_loader";

const Loader = () => {
  return (
    <StyledLoader>
      <Comment height="30" width="30" backgroundColor=" #448aff" />
      <p>Loading...</p>{" "}
    </StyledLoader>
  );
};

export default Loader;
