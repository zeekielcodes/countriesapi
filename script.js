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
          console.log(data);
          for (var i = 0; i < data.length; i++) {
            const CountriesContainer = document.querySelector(".countries");
            const DisplayCountry = document.createElement("div");
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

            Search();
          }
        })
        .catch((error) => {
          document.querySelector(".countries").innerHTML =
            "<h2>" + error.message + "</h2";
          console.log(error);
        });
    } catch {}
  }

  GetCountries();

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

  document.querySelector("form").addEventListener("submit", Search);

  function Search() {
    // const SearchedCountry = document.querySelector("input").value;
    // const Country = GetCountrie;
    // document.querySelectorAll(".DisplayCountry").forEach((div) => {
      
    //   div.style.display = "none";
    //   e

      
    //   if (SearchedCountry == Country) {
    //     div.style.display = "block";
    //   }
    // });
  }

  function DarkMode() {
    const Moon = document.querySelector("i")
    const Body = document.querySelector("body")
    const Nav = document.querySelector("nav")
    const Search = document.querySelector(".search");
    const Select = document.querySelector("select");
    const Button = document.querySelector(".Dark");
    const Display = document.querySelectorAll(".DisplayCountry");
    const Title = document.querySelectorAll(".title");
    if (Moon.classList.contains("fa-regular")) {
    Moon.classList.replace("fa-regular", "fa-solid");
    Body.classList.add("dark");
    Nav.classList.add("dark");
    Search.classList.add("dark");
    Select.classList.add("dark");
    Button.classList.add("dark");
    Display.forEach(div => {
      div.classList.add("dark")
    });
    Title.forEach(span => {
      span.classList.add("dark")
    });
  } else {
    Moon.classList.replace("fa-solid", "fa-regular");
    Body.classList.remove("dark");
    Nav.classList.remove("dark");
    Search.classList.remove("dark");
    Select.classList.remove("dark");
    Button.classList.remove("dark");
    Display.forEach(div => {
      div.classList.remove("dark")
    });
    Title.forEach(span => {
      span.classList.remove("dark")
    });
  }
}