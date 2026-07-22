export default async function handler(req, res) {
  res.status(200).json({
    success: true,
    message: "API is working",
    data: [
      {
        Number: "917502189959",
        Name: "Swastica"
      },
      {
        Number: "917042255531",
        Name: "Nishant"
      }
    ]
  });
}
