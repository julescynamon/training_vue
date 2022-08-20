import Data from "./product";

export async function seed(collectionName: string) {
  await fetch(`https://restapi.fr/api/${collectionName}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Data),
  });
}

export async function seed40Articles(collectionName: string) {
  await fetch(`https://restapi.fr/generator`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "times": 40,
      "resourceName": collectionName,
      "title": "name",
      "image": {
        "type": "image",
        "theme": "computer",
        "height": 200,
        "width": 300,
      },
      "category": {
        "type": "collection",
        "values": ["Gamer", "Desktop", "Streaming"],
        "unique": false,
      },
      "description": {
        "type": "sentence",
        "range": [9, 12],
      },
      "price": {
        "type": "number",
        "range": [800, 2500],
      },
    }),
  });
}
