const toBeClonedSection = document.getElementById("js--toBeCloned");


fetch("/data/trellies.json").then(
    function (response) {
        return response.json();
    }
).then(
    function (data) {
        /* get main */
        const main = document.querySelector('main');
        /* make section and add section */
        let toBeAddedSection = document.createElement("section");
        toBeAddedSection.classList.add("tasks");
        main.appendChild(toBeAddedSection);
        

           
        /*header*/
        let toBeAddedHeader = document.createElement("header");
        toBeAddedHeader.classList.add("tasks__header");
        toBeAddedSection.appendChild(toBeAddedHeader);

        
        /*h2*/
        let toBeAddedH2 = document.createElement("h2");
        toBeAddedH2.classList.add("tasks__h2");
        toBeAddedH2.innerText = data.title;
        toBeAddedHeader.appendChild(toBeAddedH2);

        /*header-wrap*/
        toBeAddedWrapper = document.createElement("div");
        toBeAddedWrapper.classList.add("tasks__headerWrapper");
        toBeAddedHeader.appendChild(toBeAddedWrapper);
        
        /*Numbers*/
        let toBeAddedNumber = document.createElement("div");
        toBeAddedNumber.classList.add("tasks__number");
        toBeAddedNumber.innerText = data.activities.length;
        toBeAddedWrapper.appendChild(toBeAddedNumber);

        /*Button*/
        let toBeAddedButton = document.createElement("button");
        toBeAddedButton.classList.add("tasks__edit");
        toBeAddedButton.innerText = "...";
        toBeAddedWrapper.appendChild(toBeAddedButton);

        
        let toBeAddedUl = document.createElement("ul");
        toBeAddedUl.classList.add("tasks__list");
        toBeAddedSection.appendChild(toBeAddedUl);
        for (let i = 0; i < data.activities.length; i++) {
            let toBeAddedLi = document.createElement("li");
            toBeAddedLi.classList.add("tasks__listItem");
            toBeAddedUl.appendChild(toBeAddedLi);
          

            let toBeAddedLabel = document.createElement("label");
            toBeAddedLabel.classList.add("tasks__label");
            if (data.activities[i].extraClass !== "") {
                toBeAddedLabel.classList.add("tasks__label--" + data.activities[i].extraClass);
               
            }
            /*profilepic*/ 
            toBeAddedLabel.innerText = data.activities[i].label;
            toBeAddedLi.appendChild(toBeAddedLabel);
            let toBeAddedSpan = document.createElement("span")
            let toBeAddedInintials = document.createElement("figure")
    
            let toBeAddedP = document.createElement("p");
            toBeAddedP.innerText = data.activities[i].description;
            toBeAddedLi.appendChild(toBeAddedP);
            toBeAddedSpan.classList.add("wrapper")
            toBeAddedLi.appendChild(toBeAddedSpan)
            toBeAddedInintials.classList.add("tasks__label__initials");
            toBeAddedInintials.innerText = data.activities[i].ini;
            toBeAddedSpan.appendChild(toBeAddedInintials)     
        }

        
    }



        /* activity label 
        clone.children[1].children[0].children[0].innerText = data.activities[0].label;
        /* activity text 
        clone.children[1].children[0].children[1].innerText = data.activities[0].description;*/
)