import loaderToggle from "./loader";
const requst = async (resurce) => {
  loaderToggle(true);
  const req = await fetch(resurce);
  if (!req.ok) {
    loaderToggle(false);
    throw new Error("Something went wrong :(");
  }
  const data = await req.json();
  loaderToggle(false);

  return data;
};
export default requst;
