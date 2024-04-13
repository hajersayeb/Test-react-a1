import '../pages/styles/Register.css';
import { useState } from 'react';

function Register() {
const [nom, setNom] = useState("");
const [prenom, setPrenom] = useState("");
const [adresse, setAdresse] = useState("");
const handleSubmit = (event) => {
  event.preventDefault();
  alert(`The name you entered was: ${nom}, The prenom you entered was: ${prenom}, The Adress you entered was: ${adresse}`);
}

    return(

    <>
    <form onSubmit={handleSubmit}>
        <h1>
            Register your account
        </h1>
<div class="mb-3 row">

    <label  class="col-sm-2 col-form-label">Nom</label>
    <div class="col-sm-10">
      <input type="text" readonly class="form-control" id="s" placeholder="Nom" value={nom}
      onChange={(e) => setNom(e.target.value)} />
    </div>

    <label class="col-sm-2 col-form-label">Prenom</label>
    <div class="col-sm-10">
      <input type="text" readonly class="form-control" id="s" placeholder="Prenom"value={prenom}
      onChange={(p) => setPrenom(p.target.value)} />
    </div>

    
    
    <label class="col-sm-2 col-form-label">Adresse</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="" placeholder="Adresse" value={adresse}
      onChange={(a) => setAdresse(a.target.value)} />

    </div>
    <div class="col-3">

  <button type="submit" className="btn btn-danger">Register</button>
  </div>

</div>
</form>
</>

)
};
export default Register;