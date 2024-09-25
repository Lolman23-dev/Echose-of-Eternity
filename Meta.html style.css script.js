<!DOCTYPE html>
<html>
<head>
  <title>Echoes of Eternity</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <h1>Echoes of Eternity</h1>
  </header>
  <main>
    <section>
      <h2>Game Overview</h2>
      <p>Restore balance to the timestream...</p>
    </section>
    <section>
      <h2>Gameplay Features</h2>
      <ul>
        <li>Time manipulation</li>
        <li>Elemental magic</li>
        <li>Combat mastery</li>
      </ul>
    </section>
  </main>
  <footer>
    <p>&copy; 2024 Echoes of Eternity</p>
  </footer>
  <script src="script.js"></script>
</body>
</html>

*CSS (style.css)
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
}

header {
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

section {
  background-color: #fff;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

footer {
  background-color: #333;
  color: #fff;
  padding: 10px;
  text-align: center;
  clear: both;
}

JavaScript (script.js)
const header = document.querySelector('header');
const sections = document.querySelectorAll('section');

header.addEventListener('click', () => {
  sections.forEach((section) => {
    section.classList.toggle('active');
  });
});
```
