import { LoaderContainer, LoaderWrapper } from "./Loader.style";

const Loader = () => {
  return (
    <LoaderContainer>
      <p>Loading, please wait...</p>
      <LoaderWrapper>
        <div></div>
        <div></div>
      </LoaderWrapper>
    </LoaderContainer>
  );
};
export default Loader;
