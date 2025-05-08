export default function handler(req, res) {
  const quotes = [
    {
      quote: "The best way to get started is to quit talking and begin doing.",
      author: "Walt Disney"
    },
    {
      quote: "Don't let yesterday take up too much of today.",
      author: "Will Rogers"
    },
    {
      quote: "It’s not whether you get knocked down, it’s whether you get up.",
      author: "Vince Lombardi"
    },
    {
      quote: "If you are working on something exciting, it will keep you motivated.",
      author: "Steve Jobs"
    },
    {
      quote: "Success is not in what you have, but who you are.",
      author: "Bo Bennett"
    },
    {
      quote: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
      author: "Zig Ziglar"
    },
    {
      quote: "Hardships often prepare ordinary people for an extraordinary destiny.",
      author: "C.S. Lewis"
    },
    {
      quote: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt"
    },
    {
      quote: "Do what you can with all you have, wherever you are.",
      author: "Theodore Roosevelt"
    },
    {
      quote: "Everything you’ve ever wanted is on the other side of fear.",
      author: "George Addair"
    }
  ];

  const randomIndex = Math.floor(Math.random() * quotes.length);
  res.status(200).json(quotes[randomIndex]);
}
