const data = {
    "banks": [
        {
            "done": false,
            "title": "title",
            "loan_interest_rate": "amet, consectetuer adipiscing elit. Aenean id metus id velit ullamcorper pulvinar.",

        },
        ,
        {
            "done": true,
            "title": "title",
            "loan_interest_rate": "amet, consectetuer adipiscing elit. Aenean id metus id velit ullamcorper pulvinar.",

        },
        {
            "done": false,
            "title": "title",
            "loan_interest_rate": "pamet, consectetuer adipiscing elit. Aenean id metus id velit ullamcorper pulvinar.",

        },
        {    "title": "title",
            "done": true,
            "loan_interest_rate": "amet, consectetuer adipiscing elit. Aenean id metus id velit ullamcorper pulvinar.",

        }
    ]
};

const banksContainer = document.getElementById("banks-container");


function renderBanks(banks) {
    banksContainer.innerHTML = "";

    banks.forEach(bank => {
        const bankElement = document.createElement("div");
        bankElement.className = "bank";

        let buttonColor = "";
let buttonn=""
        if (bank.done === true) {
            buttonColor ="#34D399";
            buttonn="none"

        } else  {
            buttonColor = "#9CA3AF";
            buttonn="line-through"

        }

        bankElement.innerHTML = `

      
        <div class="dol" style=" background-color: ${buttonColor}">
            <div class="nadpis" style="text-decoration: ${buttonn}"><b>${bank.title}</b></div>
            <div class="podnadpis" style="text-decoration: ${buttonn}">${bank.loan_interest_rate}</div>
              </div>
        `;

        banksContainer.appendChild(bankElement);
    });
}


renderBanks(data.banks);
