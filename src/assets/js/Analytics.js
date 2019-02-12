/**
 * Statistiques d'utilisation des jeux dans l'édition du soir
 *
 * Utilisation :
 * - Importer ce script avec `import CustomAnalytics from 'path/to/analytics.js';`
 * - Indiquer le nom du jeu en bas de ce script
 * - Mettre les appels suivant aux endroits appropriés dans le jeu :
 *   - CustomAnalytics.record("view"); // la page a été ouverte
 *   - CustomAnalytics.record("play"); // l'utilisateur a commencé une partie
 *   - CustomAnalytics.record("finish"); // l'utilisateur a fini une partie
 */
export default (function(game) {
  var token = (function() {
    var token = "NO_TOKEN";
    try {
      token = localStorage.getItem("game_user_token");
      if (!token) {
        token = (function() {
          function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
              .toString(16)
              .substring(1);
          }
          return s4() + s4() + s4();
        })();
        localStorage.setItem("game_user_token", token);
      }
    } catch (e) {
      /* eslint-disable-line */
    }
    return token;
  })();

  return {
    record: function(action) {
      try {
        var x = new XMLHttpRequest();
        x.open(
          "POST",
          "https://eds.ouest-france.fr/dynamic/analytics/games/record.php" +
            "?action=" +
            encodeURIComponent(action) +
            "&game=" +
            encodeURIComponent(game) +
            "&token=" +
            encodeURIComponent(token) +
            "&referer=" +
            encodeURIComponent(window.location.href),
          true
        );
        x.send();
      } catch (e) {
        /* eslint-disable-line */
      }
    }
  };
})("Sudoku v2");
