const urlParams = new URLSearchParams(window.location.search);
fetch(`https://pokeapi.co/api/v2/pokemon`)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    return response.json();
  })
  .then((data) => {
    let poketype = "";
    let pokeindex = "";
    let pokeAbilities = "";
    let weight = "";

    fetch(data.results[urlParams.get('pokemon')*3].url)
      .then((response) => {
        if (!response.ok) {
          return "";
        }

        return response.json();
      })
      .then((data) => {
        if (data === "") {
          poketype = "not found";
        } else {
          data.types.forEach((element) => {
            poketype += element.type.name + " ";
          });

          pokeindex = data.game_indices[3].game_index;
          weight = data.weight;

          data.abilities.forEach(function (element, idx) {
            if (idx === data.abilities.length - 1) {
              pokeAbilities += element.ability.name + ".";
            } else {
              pokeAbilities += element.ability.name + ", ";
            }
          });
        }
      })
      .then(() => {
        //Setting the variables with the needed info
        let title = `Choose ${data.results[urlParams.get('pokemon')*3].name}`;

        let descr =
          "Starter pokémon " +
          data.results[urlParams.get('pokemon')*3].name +
          " is type " +
          poketype;
          let longdescr =
          "This little starter pokémon called " +
          data.results[urlParams.get('pokemon')*3].name +
          " is type " +
          poketype +
          ". As in every Pokémon story you have to choose a starting Pokémon, surely no one decides to take the plant type, you will surely choose the fire type because you are the most basic and rat child there is. But it doesn't really matter, because you'll end up looking at which one is the prettiest or the coolest and at most giving them funny names like Eustace or if you're even more geeky, Dracarys, I don't know. Anyway, in case you are really interested, their abilities are these: " +
          pokeAbilities +
          ". For your useless information maybe you want to know that the weight is aproximately: "+
          weight+
          "gr. <br><br> Stop here, please, you are not going to be a pokemon trainer, I was joking, go f***** out and call back your friends, dude.";


        //Substituting the elements from the DOM
        document.getElementById("image").style.backgroundImage=`url(../../../assets/projects-section/${data.results[urlParams.get('pokemon')*3].name}.jpg)`; 

        let HTMLTitle = document.getElementById(`title`);
        HTMLTitle.innerHTML = title;

        let HTMLDescr = document.getElementById(`descr`);
        HTMLDescr.innerHTML = descr;

        var date = new Date();
        const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

	      var current_date = monthNames[(date.getMonth())]+" "+date.getDate()+", "+ date.getFullYear();
	      document.getElementById("currentDate").innerHTML = "Completed on " + current_date;

        let HTMLLongDescr = document.getElementById(`longdescr`);
        HTMLLongDescr.innerHTML = longdescr;

      });
  })
  .catch((error) => console.log(error));

