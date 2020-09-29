import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { StateService } from '../services/state.service';


@Component({
  selector: 'app-enregistrement',
  templateUrl: './enregistrement.component.html',
  styleUrls: ['./enregistrement.component.scss']
})
export class EnregistrementComponent implements OnInit {

  enregistrementForm: FormGroup;
  loading = false;
  errorMessage: string;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private auth: AuthService,
              private state: StateService,
              ) { }

  ngOnInit() {
    this.state.mode$.next('form');
    this.enregistrementForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
      firstname: [null, Validators.required],
      lastname: [null, Validators.required],
      contact: [null, Validators.required],
      fonction: [null, Validators.required],
      role: [ {value: "basic", disabled: true},Validators.required],
    });
  }

  onSignup() {
    this.loading = true;
    const email = this.enregistrementForm.get('email').value;
    const password = this.enregistrementForm.get('password').value;
    const firstname = this.enregistrementForm.get('firstname').value;
    const lastname = this.enregistrementForm.get('lastname').value;
    const fonction = this.enregistrementForm.get('fonction').value;
    const contact = this.enregistrementForm.get('contact').value;
    const role = this.enregistrementForm.get('role').value;
    this.auth.signup(email, password,firstname,lastname,fonction,contact,role).then(
      () => {
        this.loading = false;
        
          this.router.navigate(['/dashboard']);
        
        }
      
    ).catch(
      (error) => {
        this.loading = false;
        this.errorMessage = error.message;
      }
    );
  }
}
