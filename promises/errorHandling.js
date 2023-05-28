const syncFunction = () => {
  throw new Error("Throwing weird error");
};

const someSideEffect = () => {
  return new Promise((resolve, reject) => {
    return resolve("Resolved sideeffect");
  });
};

const asyncFunction = async () => {
  try {
    const result = await someSideEffect();
    syncFunction();
  } catch (error) {
    console.log("error:: ", error);
  }
};

asyncFunction().then(resp=>console.log("resp: ",resp)).catch(error=>console.log(error));