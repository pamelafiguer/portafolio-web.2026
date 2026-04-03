import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface ContactLink {
  label: string;
  value: string;
  icon: IconDefinition;
  color: 'cyan' | 'purple';
  href: string;
}

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule, FontAwesomeModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class Contact {
  faEnvelope = faEnvelope;
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faWhatsapp = faWhatsapp;

  contactLinks: ContactLink[] = [
    {
      label: 'Email',
      value: 'pamelaestefani2005@gmail.com',
      icon: faEnvelope,
      color: 'cyan',
      href: 'mailto:pamelaestefani2005@gmail.com'
    },
    {
      label: 'LinkedIn',
      value: 'Pamela Estefani Figueroa Rosas',
      icon: faLinkedin,
      color: 'cyan',
      href: 'https://www.linkedin.com/in/pamela-estefani-figueroa-rosas-539303280'
    },
    {
      label: 'GitHub',
      value: 'pamelafiguer',
      icon: faGithub,
      color: 'purple',
      href: 'https://github.com/pamelafiguer'
    },
    {
      label: 'WhatsApp',
      value: '+51 903 447 553',
      icon: faWhatsapp,
      color: 'cyan',
      href: 'https://wa.me/+51903447553'
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