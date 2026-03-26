import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TimelineItem {
  title: string;
  company: string;
  date: string;
  isEducation: boolean;
  bullets: string[];
  place: string;
}

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrls: ['./experience.scss']
})
export class Experience{
  timelineItems: TimelineItem[] = [
    {
      title: 'Desarrolladora FullStack',
      company: 'Constructora & Multiservicios Caqui E.I.R.L.',
      date: '📅 Feb 2025 – Nov 2025',
      place: '📍 Lima, Perú',
      isEducation: false,
      bullets: [
        'Desarrollé apps web con Angular y TypeScript bajo arquitectura de componentes',
        'Integré APIs REST en Java con correcta gestión de contratos y errores.',
        'Diseñé interfaces UI/UX utilizando Figma.'
      ]
    },
    {
      title: 'ML Junior – Analista de Datos',
      company: 'Conauti SAC',
      date: '📅 Sep 2024 – Dic 2024',
      place: '📍 Lima, Perú',
      isEducation: true,
      bullets: [
        'Implementé flujos conversacionales con LangGraph.',
        'Integré modelos de lenguaje con Vertex IA en entornos empresariales.',
        'Desarrollé software de IA mediante aprendizaje automático y minería de datos.'
      ]
    },
    {
      title: 'Desarrolladora Web',
      company: 'Grupo GN.SAC',
      date: '📅 Feb 2024 – Sep 2024',
      place: '📍 Lima, Perú',
      isEducation: false,
      bullets: [
        'Desarrollé soluciones frontend con Angular.',
        'Mantuve rendimiento evolutivo y correctivo del entorno web.',
        'Implementé soluciones con Angular, TypeScript y bases de datos relacionales.'
      ]
    },
    {
      title: 'Ingeniería de Software con IA',
      company: 'SENATI',
      date: '📅 May 2023 – Feb 2026',
      place: '📍 Lima – Cercado de Lima',
      isEducation: true,
      bullets: [
        'Programación de sistemas, IA, Machine Learning, BD y Arquitectura.',
        'Investigación en análisis predictivo de precios y enfermedades.',
        'Certificación completada'
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