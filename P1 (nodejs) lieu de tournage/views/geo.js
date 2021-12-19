// var lat = 48.852969;
//         var lon = 2.349903;
//         var macarte = null;
//         // Fonction d'initialisation de la carte
//     function G(){
//         function initMap() {
//             // Créer l'objet "macarte" et l'insèrer dans l'élément HTML qui a l'ID "map"
//             macarte = L.map('map').setView([lat, lon], 11);
//             // Leaflet ne récupère pas les cartes (tiles) sur un serveur par défaut. Nous devons lui préciser où nous souhaitons les récupérer. Ici, openstreetmap.fr
//             L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
//                 // Il est toujours bien de laisser le lien vers la source des données
//                 attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
//                 minZoom: 3,
//                 maxZoom: 17
    
//             }).addTo(macarte);
    
//     var marqueur = L.marker([48.852969, 2.349903]).addTo(macarte);
//     marqueur.bindPopup("<p>Paris</p>");
//     //#XRFR# étant donnée que la variable macarte est déclarée, là, ça marche ;)
//     marqueur = L.marker([48.88137903008482, 2.340902040775606 ]).addTo(macarte);//#XRFR# ça c juste un test d'un tournage
//           marqueur.bindPopup("<p>Pari</p>");
//     marqueur = L.marker([48.83011647720049 ,2.352558675604982  ]).addTo(macarte);
//     marqueur.bindPopup("<p>Par</p>");
      
//     //inserer le rectange bleu
    
//     var polygon = L.polygon([
//       [48.852969, 2.349903],
//       [48.88137903008482, 2.340902040775606],
//       [48.83011647720049 ,2.352558675604982]
//     ]).addTo(macarte);
//           }



//    window.onload = function(){
//     // Fonction d'initialisation qui s'exécute lorsque le DOM est chargé
//     initMap(); 
//         };
//     }