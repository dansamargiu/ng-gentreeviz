
angular.module('utilitiesFactory', [])
  .factory('utilities', function() {
    return {
      getReadableName: function(person) {
        var readableName = [];
        for (i = 0; i < person.name_representation.length; i++) {
          var curId = person.name_representation[i];
          var curName = "";
          for (j = 0; j < person.names.length; j++) {
            if (person.names[j].id == curId) {
              curName = person.names[j].value;
              break;
            }
          }

          readableName.push(curName);
        }
        return readableName.join(" ");
      }
    };
  });
