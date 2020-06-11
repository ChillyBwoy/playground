const examples = (process.env.REACT_APP_SCHEMAS || "")
  .split(":")
  .map((chunk) => {
    const [name, url] = chunk.split("=");

    return {
      name,
      url: `/schema/${url}.json`,
    };
  });

  export default examples;
