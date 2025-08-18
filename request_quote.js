const data1 = {
    offices1: {
        ["Ortigas Center"]: ["Offices at The Galleon"],
        ["Ortigas East"]: ["The Glaston Tower"]
    },
    residences1: {
        ["Capitol Commons"]: ["Empress at Capitol Commons", "Maven at Capitol Commons", 
        "The Imperium at Capitol Commons", "Royalton at Capitol Commons"],

        ["Circulo Verde"]: ["Avila North and South", "Garden Homes", "Ibiza Tower", 
        "Lledida Tower", "Majorca Residences", "Seville Residences"],

        ["Costa Calatagan"]: ["Costa Calatgan"],

        ["Greenhills Center"]: ["Connor Greenhills", "Virdian Greenhills"],

        ["Ortigas Center"]: ["Olin at Jade Drive", "Residences at The Galleon"],

        ["Ortigas East"]: ["Maple at Verdant Towers"],
    }
};

function updateSubcategory1(){
    const category_ = document.getElementById("category1").value;
    const sub_ = document.getElementById("subcategory1");
    const item_ = document.getElementById("item1");

    sub_.innerHTML = '<option value="">-- Select Subcategory --</option>';
    item_.innerHTML = '<option value="">-- Select Item --</option>';
    sub_.disabled = item_.disabled = true;

    if(data1[category_]){
        Object.keys(data1[category_]).forEach(s => {
            const opt = document.createElement("option");
            opt.value = s;
            opt.textContent = s.charAt(0).toUpperCase() + s.slice(1);
            sub_.appendChild(opt);
        });
        sub_.disabled = false;
    }
}

function updateItems1(){
    const category_ = document.getElementById("category1").value;
    const subcategory_ = document.getElementById("subcategory1").value;
    const item_ = document.getElementById("item1");

    item_.innerHTML = '<option value="">-- Select Item --</option>'
    item_.disabled = true;

    if(data1[category_] && data1[category_][subcategory_]){
        data1[category_][subcategory_].forEach(i => {
            const opt = document.createElement("option");
            opt.value = i.toLowerCase();
            opt.textContent = i;
            item_.appendChild(opt);
        });
        item_.disabled = false;
    }
}

function clearError1(field){
    document.getElementById(`error-${field}`).style.display = 'none';
}

function validatedStep1(){
    const field_ = ['category1', 'subcategory1', 'item1'];
    let valid_ = true;

    field_.forEach(field => {
        const val_ = document.getElementById(field).value;
        const error_ = document.getElementById(`error-${field}`);
        if(!val_){
            error_.style.display = 'block';
            valid_ = false;
        }else{
            error_.style.display = 'none';
        }
    });

    if(valid_){
        goToStep1(2);
    }
}

function toggleSubmit1(){
    const checkbox_ = document.getElementById("agree1");
    const btn_ = document.getElementById("submitBtn1");
    btn_.disabled = !checkbox_.checked;
    btn_.classList.toggle('disabled', !checkbox_.checked);
}

function submitForm1(){
    alert("Submitted Successfully!");
    document.getElementById("step1_2").classList.remove("active1");
    document.getElementById("step1_3").classList.add("active1");
    return false;
}

function goToStep1(step){
    document.querySelectorAll('form-step1').forEach((el, index) => {
       el.classList.toggle('active1', index === step - 1); 
    });
}


function thankyou_name1(){
    const namemo_ = document.getElementById("firstName1").value;
    const displayit1 = document.getElementById("displayit1");
    displayit1.textContent = "Thank you po!!" + namemo_;
}

function gobacktoproperty1(){
    document.getElementById("step1_1").classList.add("active1");
    document.getElementById("step1_3").classList.remove("active1");
}