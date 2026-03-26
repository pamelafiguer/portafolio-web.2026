import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

interface ContactLink {
  label: string;
  value: string;
  icon: string;
  color: 'cyan' | 'purple';
  href: string;
}

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class Contact {
  contactLinks: ContactLink[] = [
    {
      label: 'Email',
      value: 'pamelaestefani2005@gmail.com',
      icon: '✉️',
      color: 'cyan',
      href: 'mailto:pamelaestefani2005@gmail.com'
    },
    {
      label: 'LinkedIn',
      value: 'Pamela Figueroa',
      icon: '💼',
      color: 'cyan',
      href: 'https://linkedin.com/in/pamelapfigueroa'
    },
    {
      label: 'GitHub',
      value: 'pamelafiguer',
      icon: '🐙',
      color: 'purple',
      href: 'https://github.com/pamelafiguer'
    }
  ];

  contactForm: FormGroup;
  isSubmitting = false;
  submitMessage: string | null = null;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      this.submitMessage = 'Por favor completa todos los campos correctamente.';
      setTimeout(() => this.submitMessage = null, 3000);
      return;
    }

    this.isSubmitting = true;

    const { name, email, message } = this.contactForm.value;
    const mailtoLink = `mailto:pamelaestefani2005@gmail.com?subject=${encodeURIComponent(`Contacto desde portafolio - ${name}`)}&body=${encodeURIComponent(`Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`)}`;

    // Simulate submission delay
    setTimeout(() => {
      window.location.href = mailtoLink;
      this.isSubmitting = false;
      this.submitMessage = '¡Mensaje enviado!';
      this.contactForm.reset();
      setTimeout(() => this.submitMessage = null, 3000);
    }, 600);
  }

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}