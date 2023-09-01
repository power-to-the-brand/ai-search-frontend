export default async function (req, res) {
  const response = await fetch(`${process.env.AI_SEARCH_BACKEND_URL}/search`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      question: req.body.question,
      url: req.body.url,
    }),
  });

  const data = await response.json();
  console.log("data", data);

  res.status(200).json(data);
}
