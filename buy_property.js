const data = {
      offices: {
        ["Ortigas Center"]: ["Offices at The Galleon"],
        ["Ortigas East"]: ["The Glaston Tower"]
      },
      residences: {
        ["Capitol Commons"]: ["Empress at Capitol Commons", "Maven at Capitol Commons", 
        "The Imperium at Capitol Commons", "Royalton at Capitol Commons"],

        ["Circulo Verde"]: ["Avila North and South", "Garden Homes", "Ibiza Tower", 
        "Lledida Tower", "Majorca Residences", "Seville Residences"],

        ["Costa Calatagan"]: ["Costa Calatagan"],

        ["Greenhillis Center"]: ["Connor Greenhillis", "Virdian Greenhillis"],

        ["Ortigas Center"]: ["Olin at Jade Drive", "Residences at The Galleon"],

        ["Ortigas East"]:["Maple at Verdant Towers"],
      }
    };

    function updateSubcategory() {
      const category = document.getElementById("category").value;
      const sub = document.getElementById("subcategory");
      const item = document.getElementById("item");

      sub.innerHTML = '<option value="">-- Select Subcategory --</option>';
      item.innerHTML = '<option value="">-- Select Item --</option>';
      sub.disabled = item.disabled = true;

      if (data[category]) {
        Object.keys(data[category]).forEach(s => {
          const opt = document.createElement("option");
          opt.value = s;
          opt.textContent = s.charAt(0).toUpperCase() + s.slice(1);
          sub.appendChild(opt);
        });
        sub.disabled = false;
      }
    }

    function updateItems() {
      const category = document.getElementById("category").value;
      const subcategory = document.getElementById("subcategory").value;
      const item = document.getElementById("item");

      item.innerHTML = '<option value="">-- Select Item --</option>';
      item.disabled = true;

      if (data[category] && data[category][subcategory]) {
        data[category][subcategory].forEach(i => {
          const opt = document.createElement("option");
          opt.value = i.toLowerCase();
          opt.textContent = i;
          item.appendChild(opt);
        });
        item.disabled = false;
      }
    }

    function clearError(field) {
      document.getElementById(`error-${field}`).style.display = 'none';
    }

    function validateStep1() {
      const fields = ['category', 'subcategory', 'item'];
      let valid = true;

      fields.forEach(field => {
        const val = document.getElementById(field).value;
        const error = document.getElementById(`error-${field}`);
        if (!val) {
          error.style.display = 'block';
          valid = false;
        } else {
          error.style.display = 'none';
        }
      });

      if (valid) {
        goToStep(2);
      }
    }

    function toggleSubmit() {
      const checkbox = document.getElementById("agree");
      const btn = document.getElementById("submitBtn");
      btn.disabled = !checkbox.checked;
      btn.classList.toggle('disabled', !checkbox.checked);
    }

    function submitForm() {
      alert("Form submitted successfully!"); 
      document.getElementById("step2").classList.remove("active");
      document.getElementById("step3").classList.add("active");
      return false; 
    }

    function goToStep(step) {
      document.querySelectorAll('.form-step').forEach((el, index) => {
        el.classList.toggle('active', index === step - 1);
      });
    }

    function thankyou_name(){
    const namemo = document.getElementById("firstName").value;
    const displayit = document.getElementById("displayit");
    displayit.textContent = "Thank you " + namemo;
    }
    
    
    function gobacktoproperty(){
      document.getElementById("step1").classList.add("active");
      document.getElementById("step3").classList.remove("active");
    }