import React, { useEffect, useState } from 'react';
import Input from './input ';
import Select from './select';
import data_ar from './money';


function EXCHANGEAPP(props) {
    let [value, setvalue] = useState(1);
    let [sum, setsum] = useState(1);

    let formApi=["USD", "ILS", "EUR", "BTC", "THB"];

    let [var1Index,setvar1Index] =useState (1);
    let [var2Index,setvar2Index] =useState (0);

    let [myAryy, _setval] = useState(["USD", "ILS", "EUR", "BTC", "THB"]);
    let [valForm, setValForm] = useState("ILS");
    let [valTo, setval2] = useState("USD");



    useEffect(() => {
        doapi();
    }, [var1Index,var2Index,value]);


    const doapi = () => {
        let var1 = formApi.findIndex((coin1) => {
            return coin1 === valForm
        })
        let var2 = formApi.findIndex((coin2) => {
            return coin2 === valTo
        })

        let price1 = data_ar.quotes[Object.keys(data_ar.quotes)[var1]]
        let price2 = data_ar.quotes[Object.keys(data_ar.quotes)[var2]]
        setsum((price2 / price1) * value);

    }

    const onchang = () => {
        let temp = valForm;
        setValForm(valTo)
        setval2(temp)
        
        let var2temp = var2Index;
        setvar2Index(var1Index)
        setvar1Index(var2temp)
}

    return (
        <div className=" p-2 skin " >
            form:
            <Input setvar1Index={setvar1Index} var1Index={var1Index} myAryy={myAryy} setValForm={setValForm} myValue={value} setvalue={setvalue} />
            to:
            <Select setvar2Index={setvar2Index} var2Index={var2Index}  myAryy={myAryy} setval2={setval2} />

            <div className="mx-auto pt-1">
                <i onClick={onchang} className="fa fa-random" aria-hidden="true"></i>
            </div>

            <div >the sum is: <span>{sum.toFixed(5)}</span> </div>


        </div>


    )
}

export default EXCHANGEAPP