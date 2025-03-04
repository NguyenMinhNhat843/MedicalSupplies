const createSlug = (title) => {
  return title.toLowerCase().replace(/ /g, "-");
};

export default createSlug;
