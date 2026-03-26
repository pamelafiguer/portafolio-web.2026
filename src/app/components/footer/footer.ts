import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  color: 'cyan' | 'purple';
  links: FooterLink[];
}

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss']
})
export class Footer {
  currentYear = new Date().getFullYear();

  footerSections: FooterSection[] = [
    {
      title: 'Navegación',
      color: 'purple',
      links: [
        { label: 'Sobre mí', href: '#about' },
        { label: 'Habilidades', href: '#about' },
        { label: 'Proyectos', href: '#projects' },
        { label: 'Experiencia', href: '#experience' },
        { label: 'Contacto', href: '#contact' }
      ]
    },
    {
      title: 'Recursos',
      color: 'cyan',
      links: [
        { label: 'GitHub', href: 'https://github.com/pamelafiguer' },
        { label: 'LinkedIn', href: 'https://linkedin.com/in/pamelapfigueroa' },
        { label: 'Twitter', href: 'https://twitter.com/pamelafiguur' },
        { label: 'Portfolio', href: '#hero' }
      ]
    }
  ];

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}