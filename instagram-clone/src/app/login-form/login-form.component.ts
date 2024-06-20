import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginForm!: FormGroup;
  usuarios: any[] = [];

  constructor(private fb: FormBuilder) {
    if (typeof localStorage !== 'undefined') {
      const usuariosGuardados = localStorage.getItem('usuarios');
      this.usuarios = usuariosGuardados ? JSON.parse(usuariosGuardados) : [];
    }
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      emailOrUsername: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  iniciarSesion(emailOrUsername: string, password: string): boolean {
    console.log('Intentando iniciar sesión:', { emailOrUsername, password });
    const usuario = this.usuarios.find(user => (user.email === emailOrUsername || user.username === emailOrUsername) && user.password === password);
    if (usuario) {
      alert('Inicio de sesión exitoso.');
      console.log('Inicio de sesión exitoso:', usuario);
      return true;
    } else {
      alert('Email/Usuario o contraseña incorrectos.');
      console.log('Email/Usuario o contraseña incorrectos.');
      return false;
    }
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { emailOrUsername, password } = this.loginForm.value;
      const inicioExitoso = this.iniciarSesion(emailOrUsername, password);
      if (inicioExitoso) {
        this.loginForm.reset();
      }
    }
  }
}
