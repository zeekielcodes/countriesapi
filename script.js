function GetCountries() {
  try {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((data) => {
        for (var i = 0; i < data.length; i++) {
          const CountriesContainer = document.querySelector(".countries");
          const DisplayCountry = document.createElement("div");
          DisplayCountry.setAttribute("data-name", data[i].name.official);
          DisplayCountry.setAttribute("data-region", data[i].region);
          DisplayCountry.setAttribute("class", "DisplayCountry");
          const CountryFlag = document.createElement("img");
          CountryFlag.setAttribute("src", data[i].flags.png);
          const CountryDetails = document.createElement("div");
          CountryDetails.setAttribute("class", "CountryDetails");
          const CountryName = document.createElement("h2");
          CountryName.innerHTML = data[i].name.common;
          const Paragraph1 = document.createElement("p");
          const Title1 = document.createElement("span");
          Title1.textContent = "Population : ";
          Title1.setAttribute("class", "title");
          const Population = document.createElement("span");
          Population.textContent = data[i].population;
          const Paragraph2 = document.createElement("p");
          const Title2 = document.createElement("span");
          Title2.textContent = "Region : ";
          Title2.setAttribute("class", "title");
          const Region = document.createElement("span");
          Region.textContent = data[i].region;
          const Paragraph3 = document.createElement("p");
          const Title3 = document.createElement("span");
          Title3.textContent = "Capital : ";
          Title3.setAttribute("class", "title");
          const Capital = document.createElement("span");
          Capital.textContent = data[i].capital;

          Paragraph1.append(Title1);
          Paragraph1.append(Population);
          Paragraph2.append(Title2);
          Paragraph2.append(Region);
          Paragraph3.append(Title3);
          Paragraph3.append(Capital);
          CountryDetails.append(CountryName);
          CountryDetails.append(Paragraph1);
          CountryDetails.append(Paragraph2);
          CountryDetails.append(Paragraph3);
          DisplayCountry.append(CountryFlag);
          DisplayCountry.append(CountryDetails);
          CountriesContainer.append(DisplayCountry);
        }
      })
      .catch((error) => {
        document.querySelector(".countries").innerHTML =
          "<h2>" + error.message + "</h2>";
        console.log(error);
      });
  } catch {}
}

GetCountries();

document.addEventListener("click", event => {
    const Title = event.target;
    document.querySelectorAll("h2").forEach(h2 => {
    if (Title == h2) {
        const NameOfCountry = h2.innerHTML;
        ShowMore(NameOfCountry);
    }

})
})

function ShowMore(NameOfCountry) {
    try {
    fetch(`https://restcountries.com/v3.1/name/${NameOfCountry}`)
    .then(response => {
        if(response.ok) {
            return response.json()
        } else {
            throw new Error("Oops! Something went wrong!")
        }
    })
    .then(data => {
         console.log(data)
         const Container = document.querySelector(".container");
         const ShowCountries = document.querySelector(".countries")
         const showMore = document.createElement("div")
         showMore.setAttribute("class", "ShowMore");
         const Back = document.createElement("button")
         Back.innerHTML = "&LeftArrow; Back";
         Back.setAttribute("onclick", "Back()")
         const showContainer = document.createElement("div")
         showContainer.setAttribute("class", "showContainer");
         const Flag = document.createElement("img");
         Flag.setAttribute("src", data[0].flags.png);
         const ExpandCountry = document.createElement("div");
         ExpandCountry.setAttribute("class", "ExpandCountry");
         const Name = document.createElement("h3");
         Name.setAttribute("class", "title");
         Name.innerHTML = data[0].name.common;
         const Details = document.createElement("div");
         Details.setAttribute("class", "details")
         const Details1 = document.createElement("div")
         const Details2 = document.createElement("div");


           const NativeName = document.createElement("p")
         const Native = document.createElement("span")
         Native.setAttribute("class", "title");
         Native.textContent = "Native name : "
         NativeName.append(Native)
           NativeName.append(data[0].name.official)

         const Populations = document.createElement("p")
         const pops = document.createElement("span")
         pops.setAttribute("class", "title");
         pops.textContent = "Population : "
         Populations.append(pops)
         Populations.append(data[0].population);
       
       
          const RegionName = document.createElement("p")
         const Regionn = document.createElement("span")
         Regionn.setAttribute("class", "title");
         Regionn.textContent = "Region : "
         RegionName.append(Regionn)
         RegionName.append(data[0].region)


        
         const SubRegion = document.createElement("p")
         const Subreg = document.createElement("span")
         Subreg.setAttribute("class", "title");
         Subreg.textContent = "Sub Region : "
        SubRegion.append(Subreg)
         SubRegion.append(data[0].subregion)


         const CapitalName = document.createElement("p")
         const Capitall = document.createElement("span")
         Capitall.setAttribute("class", "title");
         Capitall.textContent = "Capital : "
         CapitalName.append(Capitall)
         CapitalName.append(data[0].capital)

         const TopLevelDomain = document.createElement("p")
         const TLD = document.createElement("span")
         TLD.setAttribute("class", "title");
         TLD.textContent = "Top level domain : "
         TopLevelDomain.append(TLD)
         TopLevelDomain.append(data[0].tld)

         const Currencies = document.createElement("p")
         const Currency = document.createElement("span")
         Currency.setAttribute("class", "title");
         Currency.textContent = "Currencies : "
         Currencies.append(Currency)
         const currency = data[0].currencies;
         for (const property in currency) {
            Currencies.append(currency[property] + ", ")
         }

         const Languages = document.createElement("p")
         const language = document.createElement("span")
         language.setAttribute("class", "title");
         language.textContent = "Languages : "
         Languages.append(language)
         const languages = data[0].languages
         for (const property in languages) {
         Languages.append(languages[property] + ", ")
         }

         const Borders = document.createElement("p")
         const Border = document.createElement("span")
         Borders.setAttribute("class", "h4");
         Border.setAttribute("class", "title")
         Border.textContent = "Border Countries : "
         Borders.append(Border)
         const borderCountry = data[0].borders;
       
         for (var i=0; i<borderCountry.length; i++) {
            const EachBorder = document.createElement("span");
            EachBorder.setAttribute("class", "country");
            EachBorder.textContent = borderCountry[i];
            Borders.append(EachBorder)
         }
  


         Details1.append(NativeName)
         Details1.append(Populations)
         Details1.append(RegionName)
         Details1.append(SubRegion)
         Details1.append(CapitalName)

         Details2.append(TopLevelDomain)
         Details2.append(Currencies)
         Details2.append(Languages)

         Details.append(Details1);
         Details.append(Details2)


         ExpandCountry.append(Name)
         ExpandCountry.append(Details)
         ExpandCountry.append(Borders)

         showContainer.append(Flag);
         showContainer.append(ExpandCountry)
         
         showMore.append(Back);
         showMore.append(showContainer)
        //  Container.replaceWith(showMore)
        Container.style.display = "none";
        // Container.replaceChild()
        document.querySelector("body").append(showMore)
    })
    console.log(NameOfCountry)






    .catch(error => document.querySelector(".countries").innerHTML =
    "<h2>" + error.message + "</h2>")
    }catch {}
}

SelectDropdown = document.querySelector("select");

SelectDropdown.addEventListener("change", () => {
  const RegionValue =
    SelectDropdown.options[SelectDropdown.selectedIndex].value;
  console.log(RegionValue);

  document.querySelectorAll(".DisplayCountry").forEach((div) => {
    const Region = div.dataset.region;
    div.style.display = "none";
    if (Region === RegionValue) {
      div.style.display = "block";
    }
  });
});

function Back() {
   const Extended = document.querySelector(".ShowMore")
   Extended.style.display = "none";

   const NormalContainer = (document.querySelector(".container"));
   NormalContainer.style.display = "block"
   
}

document.querySelector("form").addEventListener("submit", Search);

function Search() {
  const SearchedCountry = document.querySelector("input").value.toUpperCase();
  document.querySelectorAll(".DisplayCountry").forEach((div) => {
    const Name = div.dataset.name.toUpperCase();
    div.style.display = "none";

    if (Name.match(SearchedCountry)) {
      div.style.display = "block";
    }
  });
}

function DarkMode() {
  const Moon = document.querySelector("i");
  const Body = document.querySelector("body");
  const Nav = document.querySelector("nav");
  const Search = document.querySelector(".search");
  const Select = document.querySelector("select");
  const Button = document.querySelector(".Dark");
  const Display = document.querySelectorAll(".DisplayCountry");
  const Title = document.querySelectorAll(".title");
  if (Moon.classList.contains("fa-regular")) {
    Moon.classList.replace("fa-regular", "fa-solid");
    Body.classList.add("dark");
    Nav.classList.add("dark");
  } else {
    Moon.classList.replace("fa-solid", "fa-regular");
    Body.classList.remove("dark");
    Nav.classList.remove("dark");
  }
}
