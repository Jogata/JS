function calcTimeInterval() {
    let today = new Date();
    let inputDate = new Date(document.getElementById('date').value);

    let endYear = today.getFullYear();
    let endMonth = today.getMonth();
    let years = endYear - inputDate.getFullYear();
    let months = endMonth - inputDate.getMonth();
    let days = today.getDate() - inputDate.getDate();

    if (months < 0)
    {
        years--;
        months += 12;
    }
    if (days < 0)
    {
        months--;
        days += new Date(endYear, endMonth, 0).getDate();
    }
    
    return [years, months, days];
}

/* ==============   HTML   ============== 
    <section class="calculator">
        <div class="inputs">
            <input type="date" name="date" id="date">
            <button onclick="calcTimeInterval()">Calculate</button>
        </div>
        <div class="outputs">
            <div>
                <span id="years">-</span>
                <p>years</p>
            </div>
            <div>
                <span id="months">-</span>
                <p>months</p>
            </div>
            <div>
                <span id="days">-</span>
                <p>days</p>
            </div>
        </div>
    </section>
*/
/* ==============   CSS   ============== 
        body {
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #e8eaec;
        }

        .calculator {
            width: 40%;
            min-width: 450px;
            padding: 50px 30px;
        }

        .inputs {
            display: flex;
            align-items: center;
            justify-content: space-around;
            margin-bottom: 40px;
            padding: 25px;
            box-shadow: 
            4px 4px 8px rgb(189, 200, 213),
            -4px -4px 8px rgb(255, 255, 255);
        }
        .inputs input,
        .inputs button {
            height: 40px;
            color: #080808;
            padding: 0 20px;
            outline: none;
            border: none;
            border-radius: 10px;
            background-color: inherit;
        }
        .inputs input,
        .inputs button:active {
            box-shadow: 
            inset 4px 4px 8px rgb(189, 200, 213),
            inset -4px -4px 8px rgb(255, 255, 255);
        }
        .inputs input {
            width: 60%;
        }
        .inputs button {
            cursor: pointer;
        }

        .outputs {
            display: flex;
            align-items: center;
            justify-content: space-between;
            text-align: center;
        }
        .outputs div {
            width: 100px;
            height: 100px;
            display: grid;
            place-items: center;
            padding: 20px 0;
            box-shadow: 
            4px 4px 8px rgb(189, 200, 213),
            -4px -4px 8px rgb(255, 255, 255),
            inset 4px 4px 8px rgb(189, 200, 213),
            inset -2px -2px 8px rgb(255, 255, 255);
            border-radius: 10px;
        }
*/