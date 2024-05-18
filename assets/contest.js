document.getElementById('register').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const fname = document.getElementById('fname').value.trim();
    const lname = document.getElementById('lname').value.trim();
    const email = document.getElementById('mail').value.trim();
    const phone = document.getElementById('pnum').value.trim();
    const theme = document.getElementById('theme').value;
    const termsChecked = document.getElementById('regread').checked;

    fullname = fname+" "+lname;

    var params = {
        from_name: "Vansh Sharma",
        email_id: email,
        to_name: fullname
    }

    if (!fname || !email || !phone || theme === 'choose' || !termsChecked) {
        alert('Please fill in all fields and accept the terms and conditions.');
    } else {
        emailjs.send("service_31qk36p","template_vdf89gk",params);
        const formContent = `
            <p class="thank">Thankyou For Participating</p>
            <div class="detick">
                <div class="details">
                    <p class="det">Name: ${fname} ${lname}</p>
                    <p class="det">Email: ${email}</p>
                    <p class="det">Phone: ${phone}</p>
                    <p class="det">Theme: ${theme}</p>
                </div>
                <div class="details details2">
                    <img src="images/tick.gif">
                    <p class="det">Redirecting...</p>
                </div>
                
            </div>
        `;
        document.getElementById('form').innerHTML = formContent;
    }

    setTimeout((e)=>{
        window.location.href="/index.html";
    },10000)
});
