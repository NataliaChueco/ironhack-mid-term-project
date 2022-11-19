//We need to get data from the API we choose in order to print dynamic 
//information in the cards 


//First, lets get the data from the api
fetch(`https://pokeapi.co/api/v2/pokemon`).then(response =>{
    if(!response.ok){
        throw new Error(`Request failed with status ${response.status}`);
    }

    return response.json();
})
.then(data =>{
    for (let i = 0; i < 3; i++) {
        let poketype = "";
        let pokeindex = "";
        fetch(data.results[i].url).then(response =>{
            if(!response.ok){
                return "";
            }
        
            return response.json();
        })
        .then(data =>{
            if(data=== ""){
                poketype= "not found";
            }
            else{
                data.types.forEach(element => {
                    poketype += element.type.name + " ";  
                });

                pokeindex = data.game_indices[3].game_index;
            }
        }).then(()=>{

            let title = `Choose ${data.results[i].name}`;
            let descr = "This little starter pokémon called "+ data.results[i].name +
            "is type "+ poketype;
            let img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeindex}.png`;
            
            let HTMLCard = document.getElementsByClassName(`projects__cards ${i}`);
            HTMLCard.getElementsByClassName('cardImg').src = img;

            let HTMLArticleFirst = document.getElementsByClassName(`card__text body_intro_medium`);
            HTMLArticleFirst.innerHTML = title;

            let HTMLArticleSecond = document.getElementsByClassName(`card__text headline_regular`);
            HTMLArticleSecond.innerHTML = descr;
        })
    }
})
.catch(error=>console.log(error))