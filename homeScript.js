function getPlayerNames() {
  const p1 = (document.getElementById("inputP1").value);
  const p2 = (document.getElementById("inputP2").value);

  if (p1 && p2 !== undefined) {
    sessionStorage.setItem("p1", p1);
    sessionStorage.setItem("p2", p2);
    window.location.href = "game.html";
  }
  else {
    return null;
  }
}