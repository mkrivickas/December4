// List of possible icons to use for the Advent impression
const emojis = [
  "🎄",
  "🎁",
  "✨",
  "🎅",
  "🕯️",
  "🧸",
  "🛷",
  "❄️", // Basic emojis
  "🌟",
  "🎉",
  "🥂",
  "🍪",
  "🍷",
  "🦌",
  "⛄",
  "🔔", // Additional Advent and Christmas-related emojis
  "🎶",
  "🌲",
  "🍫",
  "🛍️",
  "🎨",
  "🎀",
  "🎆",
  "💫", // Holiday celebration and winter emojis
  "🦋",
  "🏠",
  "🎺",
  "🕯",
  "🧑‍🎄",
  "⛪",
  "🦢",
  "🍷", // More variety
  "🍭",
  "🌨",
  "🍬",
  "🥛",
  "🧦",
  "🎋",
  "🧣",
  "⛷️", // Even more themed decorations
];

// Array of possible ornament colors
const ornamentColors = [
  "ornament-red",
  "ornament-green",
  "ornament-gold",
  "ornament-silver",
  "ornament-blue",
  "ornament-pink",
];

// List of snow-related emojis
const snowflakes = ["❄️", "🌨", "⛄"];

// Function to generate the grid dynamically
function generateGrid() {
  const gridContainer = document.getElementById("grid-container");

  // Create 100 cells (10x10 grid)
  for (let i = 0; i < 100; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");

    // Randomly assign a cell to be part of the ornament or a decoration
    const isOrnament = Math.random() < 0.4; // 40% chance for ornaments
    const isEmoji = Math.random() < 0.4; // 40% chance for emojis
    const isSnowflake = Math.random() < 0.2; // 20% chance for snowflakes in empty cells

    if (isOrnament) {
      // Add a random ornament color from the list
      const randomColor =
        ornamentColors[Math.floor(Math.random() * ornamentColors.length)];
      cell.classList.add(randomColor); // Apply random ornament color
    } else if (isEmoji) {
      const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
      cell.classList.add("emoji");
      cell.textContent = randomEmoji;
    } else if (isSnowflake) {
      // If the cell is empty, add a random snowflake emoji
      const randomSnowflake =
        snowflakes[Math.floor(Math.random() * snowflakes.length)];
      cell.classList.add("snowflake");
      cell.textContent = randomSnowflake;
    }

    // Position the ornament cells in the shape of a Christmas tree
    if (isOrnament) {
      const row = Math.floor(i / 10);
      if (row === 0 && i >= 4 && i <= 5) cell.classList.add("ornament-red"); // Top row of the tree (2 ornaments)
      if (row === 1 && (i === 1 || i === 8))
        cell.classList.add("ornament-green"); // Second row
      if (row === 2 && (i === 0 || i === 9))
        cell.classList.add("ornament-gold"); // Third row
      if (row === 3 && (i === 2 || i === 7))
        cell.classList.add("ornament-silver"); // Fourth row
      if (row === 4 && (i === 1 || i === 3 || i === 6 || i === 8))
        cell.classList.add("ornament-blue"); // Fifth row
      if (row === 5 && (i === 1 || i === 3 || i === 5 || i === 7 || i === 9))
        cell.classList.add("ornament-pink"); // Sixth row
    }

    // Append the cell to the grid
    gridContainer.appendChild(cell);
  }
}

// Generate the grid when the page loads
generateGrid();
