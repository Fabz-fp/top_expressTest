const db = require("../db");
const CustomNotFoundError = require("../errors/CustomNotFoundError");

// async function getAuthorById(req, res) {
//   const { authorId } = req.params;

//   try {
//     const author = await db.getAuthorById(Number(authorId));

//     if (!author) {
//       res.status(404).send("Author not found");
//       return;
//     }

//     res.send(`Author Name: ${author.name}`);
//   } catch {
//     console.error("Error retrieving author:", error);
//     res.status(500).send("Internal Server Error");
//   }
// };

const getAuthorById = async (req, res) => {
  const { authorId } = req.params;

  const author = await db.getAuthorById(Number(authorId));

  if (!author) {
    throw new CustomNotFoundError("Author not found");
  }

  res.send(`Author Name: ${author.name}`);
}

module.exports = { getAuthorById };