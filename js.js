const data = {
    "banks": [
        {
            "overall_score": false,
            "title": "title",
            "loan_interest_rate": "podnadpis",

        },
        {
            "overall_score": false,
            "title": "title",
            "loan_interest_rate": "podnadpis",

        },
        {
            "overall_score": true,
            "title": "title",
            "loan_interest_rate": "podnadpis",

        },
        {
            "overall_score": true,
            "title": "title",
            "loan_interest_rate": "podnadpis",

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

        if (bank.overall_score == true) {
            buttonColor ="red";

        } else  {
            buttonColor = "orange";
        }

        bankElement.innerHTML = `

       
        <div class="dol" style="background-color: ${buttonColor}">
            <p>${bank.title}</p>
            <p>${bank.loan_interest_rate}</p>
              </div>
        `;

        banksContainer.appendChild(bankElement);
    });
}


renderBanks(data.banks);
