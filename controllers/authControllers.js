
export const authControllers = async (req, res, next) => {
  try {
  console.log("here......");
  } catch (err) {
    console.log(err);
    next(err)
  }
};
